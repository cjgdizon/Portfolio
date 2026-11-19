import type { ContactMessage } from "./contact-schema";

export async function sendContactMessage(
  recipient: string,
  { name, email, message }: ContactMessage,
): Promise<"success" | "rejected" | "network-error"> {
  let response: Response;
  try {
    response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      {
        method: "POST",
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
  } catch {
    return "network-error";
  }

  if (!response.ok) return "rejected";

  const body: unknown = await response.json().catch(() => null);
  return body &&
    typeof body === "object" &&
    "success" in body &&
    (body.success === true || body.success === "true")
    ? "success"
    : "rejected";
}
