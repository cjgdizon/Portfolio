"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/contact-schema";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot: a filled hidden field means a bot, or an autofill extension that filled every input.
    // Drop silently and show the normal success state, so a real person never sees a dead button.
    if (data.website) {
      form.reset();
      setStatus("success");
      return;
    }

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      const next: FieldErrors = {
        name: fe.name?.[0],
        email: fe.email?.[0],
        message: fe.message?.[0],
      };
      setErrors(next);
      setStatus("idle");
      const first = (["name", "email", "message"] as const).find((k) => next[k]);
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("sending");

    try {
      // FormSubmit emails the message to profile.email. It must be called from the visitor's browser:
      // it answers 403 to requests coming from Vercel's servers.
      const { name, email, message } = parsed.data;
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
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
      const json = await res.json().catch(() => ({}));
      if (!res.ok || (json.success !== true && json.success !== "true")) {
        setFormError(
          "Something went wrong sending your message. Please try again, or use the Gmail link above.",
        );
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-11"
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11"
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="h-11 w-full cursor-pointer rounded-full text-sm sm:w-auto sm:px-8"
      >
        {sending ? (
          <Loader2 aria-hidden="true" className="animate-spin" />
        ) : (
          <Send aria-hidden="true" />
        )}
        {sending ? "Sending…" : "Send message"}
      </Button>

      <div role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "success" && (
          <p className="text-emerald-700 dark:text-emerald-400">
            Thanks! Your message was sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-destructive">{formError}</p>
        )}
      </div>
    </form>
  );
}
