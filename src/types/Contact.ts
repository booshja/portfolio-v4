import { z } from "zod";
import { ObjectId } from "mongodb";

export const ContactDocumentSchema = z.object({
    _id: z.instanceof(ObjectId),
    name: z.string().trim().min(1).max(255),
    email: z.string().trim().min(1).max(255).email(),
    message: z.string().trim().min(1).max(1500),
    createdAt: z.date().default(new Date()),
});

export type Contact = z.infer<typeof ContactDocumentSchema>;

/** ------------------------------------------------------------------------ */

export const ContactRequestSchema = ContactDocumentSchema.omit({
    _id: true,
    createdAt: true,
});

export type ContactRequest = z.infer<typeof ContactRequestSchema>;

/** ------------------------------------------------------------------------ */
