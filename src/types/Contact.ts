import { ObjectId } from "mongodb";
import { z } from "zod";

export const ContactDocumentSchema = z.object({
    _id: z.instanceof(ObjectId),
    createdAt: z.date().default(() => new Date()),
    email: z.string().trim().min(1).max(255).email(),
    message: z.string().trim().min(1).max(1500),
    name: z.string().trim().min(1).max(255),
});

export type Contact = z.infer<typeof ContactDocumentSchema>;

/** ------------------------------------------------------------------------ */

export const ContactRequestSchema = ContactDocumentSchema.omit({
    _id: true,
    createdAt: true,
});

export type ContactRequest = z.infer<typeof ContactRequestSchema>;

/** ------------------------------------------------------------------------ */
