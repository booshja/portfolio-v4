import { connectDB } from "@/lib/mongodb";
import BIEventModel from "@/models/BIEvent";
import { type BIEvent, BIEventRequestSchema } from "@/types";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const requestData = await request.json();
    const validatedData = BIEventRequestSchema.safeParse(requestData);

    if (!validatedData.success) {
        return Response.json({ error: "Invalid request data" }, { status: 400 });
    }

    try {
        await connectDB();
    } catch (e) {
        return Response.json({ error: "Server error" }, { status: 500 });
    }

    const eventData = validatedData.data;

    try {
        const event = new BIEventModel(eventData);
        await event.save();
    } catch (error) {
        return Response.json({ error: "Error creating contact" }, { status: 500 });
    }

    return Response.json({ success: true });
};
