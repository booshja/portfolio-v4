import { connectDB } from "@/lib/mongodb";

export async function register() {
    await connectDB();
}