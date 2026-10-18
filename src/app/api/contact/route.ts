import { contactSchema } from "@/lib/contact-schema";
import { profile } from "@/lib/data";

// Simple in-memory rate limit: 5 requests per IP per 10 minutes.
// Per-instance only; swap for Upstash/Vercel KV if you need it to be global.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { message: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    // A filled honeypot fails validation; pretend success so bots learn nothing.
    const honeypot = parsed.error.issues.some((i) => i.path[0] === "website");
    if (honeypot) return Response.json({ ok: true });

    return Response.json(
      { message: "Please check the form.", errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Delivery uses FormSubmit (formsubmit.co): no account or API key, it emails the message to the
  // address in the URL. CONTACT_TO_EMAIL can override the recipient (e.g. FormSubmit's private alias).
  const to = process.env.CONTACT_TO_EMAIL ?? profile.email;
  const { name, email, message } = parsed.data;

  let result: { success?: boolean | string; message?: string } | null = null;
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: profile.siteUrl,
        Referer: `${profile.siteUrl}/`,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio message from ${name}`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
      }),
    });
    result = await res.json().catch(() => null);
    if (!res.ok) throw new Error(`FormSubmit responded ${res.status}: ${result?.message ?? ""}`);
  } catch (error) {
    console.error("Contact form: delivery failed", error);
    return Response.json(
      { message: "Something went wrong sending your message. Please try again, or email me directly." },
      { status: 502 },
    );
  }

  if (result?.success !== true && result?.success !== "true") {
    console.error("Contact form: FormSubmit did not accept the message", result);
    return Response.json(
      { message: "Something went wrong sending your message. Please try again, or email me directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
