import { ObjectId } from "mongodb";

import type { BIEvent } from "@/types/BiEvent";

const BI_EVENTS_BASE: BIEvent[] = [
    {
        _id: new ObjectId("1"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Experience-Nav-Link",
    },
    {
        _id: new ObjectId("2"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "About-Nav-Link",
    },
    {
        _id: new ObjectId("3"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Contact-Nav-Link",
    },
    {
        _id: new ObjectId("4"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Blog-Nav-Link",
    },
    {
        _id: new ObjectId("5"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Login-Nav-Link",
    },
    {
        _id: new ObjectId("6"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Signup-Nav-Link",
    },
    {
        _id: new ObjectId("7"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Logout-Nav-Link",
    },
    {
        _id: new ObjectId("8"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Profile-Nav-Link",
    },
    {
        _id: new ObjectId("9"),
        createdAt: new Date("2024-11-29T22:36:00"),
        eventAction: "Click",
        eventArea: "Navbar",
        featureArea: "Navigation",
        options: undefined,
        targetName: "Admin-Nav-Link",
    },
];

export const BI_EVENTS_NO_OPTIONS: BIEvent[] = [...BI_EVENTS_BASE];

export const BI_EVENTS_WITH_OPTIONS: BIEvent[] = [
    ...BI_EVENTS_BASE.map((event, index) => ({
        ...event,
        options: JSON.stringify({ number: index }),
    })),
];
