import type { BIEvent as BIEventType } from "@/types";
import mongoose, { Schema, model } from "mongoose";

const BIEventSchema = new Schema<BIEventType>(
    {
        featureArea: {
            type: Schema.Types.String,
            unique: false,
            maxlength: 255,
            required: [true, "Feature area is required"],
        },
        eventArea: {
            type: Schema.Types.String,
            unique: false,
            maxlength: 255,
            required: [true, "Event area is required"],
        },
        eventAction: {
            type: Schema.Types.String,
            unique: false,
            maxlength: 255,
            required: [true, "Event action is required"],
        },
        targetName: {
            type: Schema.Types.String,
            unique: false,
            maxlength: 255,
            required: [true, "Target name is required"],
        },
        options: {
            type: Schema.Types.String,
            unique: false,
            maxlength: 255,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const BIEvent =
    mongoose.models?.BIEvent || model<BIEventType>("BIEvent", BIEventSchema);

export default BIEvent;
