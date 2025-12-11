import type { NextRequest } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { ContactRequestSchema } from "@/types/Contact";

export const POST = async (request: NextRequest) => {
    const requestData: unknown = await request.json();
    const validatedData = ContactRequestSchema.safeParse(requestData);

    if (!validatedData.success) {
        return Response.json({ error: "Invalid request data" }, { status: 400 });
    }

    try {
        await connectDB();
    } catch (e) {
        return Response.json({ error: "Server error" }, { status: 500 });
    }

    const contactData = validatedData.data;

    try {
        await Contact.create(contactData);
    } catch (error) {
        return Response.json({ error: "Error creating contact" }, { status: 500 });
    }

    return Response.json({ success: true });
};
