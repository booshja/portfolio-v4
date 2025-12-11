import mongoose, { Schema, model, type Model } from "mongoose";

import type { Contact as ContactType } from "@/types/Contact";

const ContactSchema = new Schema<ContactType>(
    {
        email: {
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Email is invalid",
            ],
            maxlength: 255,
            required: [true, "Email is required"],
            type: Schema.Types.String,
            unique: false,
        },
        message: {
            maxlength: 1500,
            required: [true, "Message is required"],
            type: Schema.Types.String,
            unique: false,
        },
        name: {
            maxlength: 255,
            required: [true, "Name is required"],
            type: Schema.Types.String,
            unique: false,
        },
    },
    {
        timestamps: true,
    }
);

const Contact =
    (mongoose.models?.Contact as Model<ContactType>) ||
    model<ContactType>("Contact", ContactSchema);

export default Contact;
