import type { NextRequest } from "next/server";

import { connectDB } from "@/lib/mongodb";
import BIEventModel from "@/models/BIEvent";
import { BIEventRequestSchema } from "@/types/BiEvent";
import { checkAuthHeader } from "@/utils/checkAuthHeader";

export const POST = async (request: NextRequest) => {
    const headers = new Headers(request.headers);
    const authorized = checkAuthHeader(headers);

    if (!authorized) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const requestData: unknown = await request.json();
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
        await BIEventModel.create(eventData);
    } catch (error) {
        return Response.json({ error: "Error creating contact" }, { status: 500 });
    }

    return Response.json({ success: true });
};
