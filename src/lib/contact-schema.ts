import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(4000, "Your message is too long (4000 characters max)."),
  // Honeypot: real users never see or fill this field.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
