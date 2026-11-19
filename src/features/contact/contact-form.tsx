"use client";

import { Loader2, Send } from "lucide-react";
import { useState, useSyncExternalStore, type FormEvent } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";

import { contactSchema, type ContactMessage } from "./contact-schema";
import { sendContactMessage } from "./send-contact-message";

const fieldClassName =
  "h-12 border-input bg-background text-base text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/20";

const fields = [
  { name: "name", label: "Name" },
  { name: "email", label: "Email" },
  { name: "message", label: "Message" },
] as const satisfies ReadonlyArray<{ name: keyof ContactMessage; label: string }>;

type ContactFormState =
  | { status: "idle" | "sending" | "success" }
  | { status: "invalid"; errors: Partial<Record<keyof ContactMessage, string[]>> }
  | { status: "error"; message: string };

const subscribeToHydration = () => () => {};

export function ContactForm({ recipient }: { recipient: string }) {
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [state, setState] = useState<ContactFormState>({ status: "idle" });
  const sending = state.status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hydrated || sending) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (data.website) {
      form.reset();
      setState({ status: "success" });
      return;
    }

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errors = z.flattenError(parsed.error).fieldErrors;
      setState({ status: "invalid", errors });
      const firstInvalid = fields.find(({ name }) => errors[name]?.length);
      if (firstInvalid) {
        form.querySelector<HTMLElement>(`#${firstInvalid.name}`)?.focus();
      }
      return;
    }

    setState({ status: "sending" });
    const result = await sendContactMessage(recipient, parsed.data);
    if (result === "success") {
      form.reset();
      setState({ status: "success" });
    } else {
      setState({
        status: "error",
        message:
          result === "network-error"
            ? "Network error. Please check your connection and try again."
            : "Something went wrong sending your message. Please try again, or use the Gmail link above.",
      });
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit} noValidate className="space-y-5">
      {fields.map(({ name, label }) => {
        const error =
          state.status === "invalid" ? state.errors[name]?.[0] : undefined;
        const inputProps = {
          id: name,
          name,
          required: true,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? `${name}-error` : undefined,
        };

        return (
          <div key={name} className="space-y-2">
            <Label htmlFor={name}>{label}</Label>
            {name === "message" ? (
              <Textarea
                {...inputProps}
                rows={6}
                className={cn(fieldClassName, "h-auto min-h-36 py-3")}
              />
            ) : (
              <Input
                {...inputProps}
                type={name === "email" ? "email" : "text"}
                autoComplete={name}
                className={fieldClassName}
              />
            )}
            {error && (
              <p id={`${name}-error`} className="text-sm font-medium text-destructive">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        disabled={!hydrated || sending}
        className="btn btn--primary h-12 w-full cursor-pointer sm:w-auto sm:px-8"
      >
        {sending ? (
          <Loader2 aria-hidden="true" className="animate-spin" />
        ) : (
          <Send aria-hidden="true" />
        )}
        {sending ? "Sending…" : "Send message"}
      </Button>

      <div role="status" aria-live="polite" className="min-h-6 text-sm">
        {state.status === "success" && (
          <p className="font-medium text-foreground">
            Thanks! Your message was sent. I&apos;ll get back to you soon.
          </p>
        )}
        {state.status === "error" && (
          <p className="font-medium text-destructive">{state.message}</p>
        )}
      </div>
    </form>
  );
}
