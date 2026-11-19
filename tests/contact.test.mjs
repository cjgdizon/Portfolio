import assert from "node:assert/strict";
import { test } from "node:test";
import { contactSchema } from "../src/features/contact/contact-schema.ts";
import { sendContactMessage } from "../src/features/contact/send-contact-message.ts";

const recipient = "portfolio@example.test";
const message = {
  name: "Visitor",
  email: "visitor@example.test",
  message: "Can we discuss a project?",
};

test("contact validation trims valid messages and rejects invalid email and length", () => {
  assert.deepEqual(contactSchema.parse({ ...message, name: " Visitor " }), message);
  assert.equal(contactSchema.safeParse({ ...message, email: "invalid" }).success, false);
  assert.equal(contactSchema.safeParse({ ...message, message: "short" }).success, false);
});

test("contact delivery posts the message and accepts both FormSubmit success formats", async (t) => {
  const fetch = t.mock.method(globalThis, "fetch", async () => Response.json({ success: true }));
  assert.equal(await sendContactMessage(recipient, message), "success");
  const [url, request] = fetch.mock.calls[0].arguments;
  assert.equal(url, "https://formsubmit.co/ajax/portfolio%40example.test");
  assert.equal(request.method, "POST");
  const body = JSON.parse(request.body);
  assert.equal(body.message, message.message);
  assert.equal(body._replyto, message.email);

  fetch.mock.mockImplementation(async () => Response.json({ success: "true" }));
  assert.equal(await sendContactMessage(recipient, message), "success");
});

test("contact delivery distinguishes a network failure from an unsuccessful response", async (t) => {
  const fetch = t.mock.method(globalThis, "fetch", async () => {
    throw new TypeError("Network offline");
  });
  assert.equal(await sendContactMessage(recipient, message), "network-error");
  fetch.mock.mockImplementation(async () => Response.json({ success: true }, { status: 500 }));
  assert.equal(await sendContactMessage(recipient, message), "rejected");
  fetch.mock.mockImplementation(async () => Response.json(null));
  assert.equal(await sendContactMessage(recipient, message), "rejected");
  fetch.mock.mockImplementation(async () => new Response("<html></html>"));
  assert.equal(await sendContactMessage(recipient, message), "rejected");
});
