import mongoose, { Schema, model, type Model } from "mongoose";

import type { BIEvent as BIEventType } from "@/types/BiEvent";

const BIEventSchema = new Schema<BIEventType>(
    {
        eventAction: {
            maxlength: 255,
            required: [true, "Event action is required"],
            type: Schema.Types.String,
            unique: false,
        },
        eventArea: {
            maxlength: 255,
            required: [true, "Event area is required"],
            type: Schema.Types.String,
            unique: false,
        },
        featureArea: {
            maxlength: 255,
            required: [true, "Feature area is required"],
            type: Schema.Types.String,
            unique: false,
        },
        options: {
            maxlength: 255,
            required: false,
            type: Schema.Types.String,
            unique: false,
        },
        targetName: {
            maxlength: 255,
            required: [true, "Target name is required"],
            type: Schema.Types.String,
            unique: false,
        },
    },
    {
        timestamps: true,
    }
);

const BIEvent =
    (mongoose.models?.BIEvent as Model<BIEventType>) ||
    model<BIEventType>("BIEvent", BIEventSchema);

export default BIEvent;
