import { ObjectId } from "mongodb";
import type { BIEvent } from "@/types";

const BI_EVENTS_BASE: BIEvent[] = [
    {
        _id: new ObjectId("1"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Experience-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("2"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "About-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("3"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Contact-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("4"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Blog-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("5"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Login-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("6"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Signup-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("7"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Logout-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("8"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Profile-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("9"),
        featureArea: "Navigation",
        eventArea: "Navbar",
        eventAction: "Click",
        targetName: "Admin-Nav-Link",
        options: undefined,
        createdAt: new Date("2024-11-29T22:36:00"),
    },
];

export const BI_EVENTS_NO_OPTIONS: BIEvent[] = [...BI_EVENTS_BASE];

export const BI_EVENTS_WITH_OPTIONS: BIEvent[] = [
    ...BI_EVENTS_BASE.map((event, index) => ({
        ...event,
        options: JSON.stringify({ number: index }),
    })),
];
