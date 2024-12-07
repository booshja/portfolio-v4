import type { Contact as ContactType } from "@/types";
import mongoose, { Schema, model } from "mongoose";

const ContactSchema = new Schema<ContactType>(
    {
        name: {
            type: Schema.Types.String,
            maxlength: 255,
            unique: false,
            required: [true, "Name is required"],
        },
        email: {
            type: Schema.Types.String,
            unique: false,
            maxlength: 255,
            required: [true, "Email is required"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Email is invalid",
            ],
        },
        message: {
            type: Schema.Types.String,
            maxlength: 1500,
            unique: false,
            required: [true, "Message is required"],
        },
    },
    {
        timestamps: true,
    }
);

const Contact =
    mongoose.models?.Contact || model<ContactType>("Contact", ContactSchema);

export default Contact;
