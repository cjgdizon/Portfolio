import type { ContactMessage } from "./contact-schema";

export async function sendContactMessage(
  recipient: string,
  { name, email, message }: ContactMessage,
): Promise<"success" | "rejected" | "network-error"> {
  try {
    const signal = AbortSignal.timeout(15_000);
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      {
        method: "POST",
        signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
      },
    );

    if (!response.ok) return "rejected";

    const body: unknown = await response.json().catch(() => null);
    if (signal.aborted) return "network-error";

    return body &&
      typeof body === "object" &&
      "success" in body &&
      (body.success === true || body.success === "true")
      ? "success"
      : "rejected";
  } catch {
    return "network-error";
  }
}
