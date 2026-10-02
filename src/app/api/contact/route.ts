import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return Response.json(
      { message: "The contact form isn't configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return Response.json(
      { message: "Something went wrong sending your message. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
