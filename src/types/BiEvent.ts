import { ObjectId } from "mongodb";
import { z } from "zod";

export const BIEventDocumentSchema = z.object({
    _id: z.instanceof(ObjectId),
    createdAt: z.date().default(() => new Date()),
    eventAction: z.string().min(1).max(255),
    eventArea: z.string().min(1).max(255),
    featureArea: z.string().min(1).max(255),
    options: z.string().min(1).max(255).optional(),
    targetName: z.string().min(1).max(255),
});

export type BIEvent = z.infer<typeof BIEventDocumentSchema>;

/** ------------------------------------------------------------------------ */

export const BIEventRequestSchema = BIEventDocumentSchema.omit({
    _id: true,
    createdAt: true,
});

export type BIEventRequest = z.infer<typeof BIEventRequestSchema>;

/** ------------------------------------------------------------------------ */
