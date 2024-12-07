import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { ContactRequestSchema } from "@/types";
import { checkAuthHeader } from "@/utils/checkAuthHeader";
import type { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const headers = new Headers(request.headers);
    const authorized = checkAuthHeader(headers);

    if (!authorized) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const requestData = await request.json();
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
        const contact = new Contact(contactData);
        await contact.save();
    } catch (error) {
        return Response.json({ error: "Error creating contact" }, { status: 500 });
    }

    return Response.json({ success: true });
};
