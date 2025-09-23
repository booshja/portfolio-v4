import { ObjectId } from "mongodb";

import type { Contact, ContactRequest } from "@/types";

export const CONTACTS_BASE: Contact[] = [
    {
        _id: new ObjectId("1"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "john.doe@example.com",
        message: "Hi I'm John!",
        name: "John Doe",
    },
    {
        _id: new ObjectId("2"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "jane.doe@example.com",
        message: "Hi I'm Jane!",
        name: "Jane Doe",
    },
    {
        _id: new ObjectId("3"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "alice@example.com",
        message: "Hi I'm Alice!",
        name: "Alice",
    },

    {
        _id: new ObjectId("4"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "Kumbukani.Porra@example.com",
        message: "Hi I'm Kumbukani Porra!",
        name: "Kumbukani Porra",
    },
    {
        _id: new ObjectId("5"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "Gul.Michaels@example.com",
        message: "Hi I'm Gul Michaels!",
        name: "Gul Michaels",
    },
    {
        _id: new ObjectId("6"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "Yu.Rothenberg@example.com",
        message: "Hi I'm Yu Rothenberg!",
        name: "Yu Rothenberg",
    },
    {
        _id: new ObjectId("7"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "Golshan.Ó.Gráda@example.com",
        message: "Hi I'm Golshan Ó Gráda!",
        name: "Golshan Ó Gráda",
    },
    {
        _id: new ObjectId("8"),
        createdAt: new Date("2024-11-29T22:36:00"),
        email: "Dəniz.Marchesi@example.com",
        message: "Hi I'm Dəniz Marchesi!",
        name: "Dəniz Marchesi",
    },
];

export const CONTACTS: Contact[] = [...CONTACTS_BASE];

export const CONTACT_REQUEST: ContactRequest = {
    email: CONTACTS_BASE[0].email,
    message: CONTACTS_BASE[0].message,
    name: CONTACTS_BASE[0].name,
};
