import { ObjectId } from "mongodb";
import type { Contact, ContactRequest } from "@/types";

export const CONTACTS_BASE: Contact[] = [
    {
        _id: new ObjectId("1"),
        name: "John Doe",
        email: "john.doe@example.com",
        message: "Hi I'm John!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("2"),
        name: "Jane Doe",
        email: "jane.doe@example.com",
        message: "Hi I'm Jane!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("3"),
        name: "Alice",
        email: "alice@example.com",
        message: "Hi I'm Alice!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },

    {
        _id: new ObjectId("4"),
        name: "Kumbukani Porra",
        email: "Kumbukani.Porra@example.com",
        message: "Hi I'm Kumbukani Porra!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("5"),
        name: "Gul Michaels",
        email: "Gul.Michaels@example.com",
        message: "Hi I'm Gul Michaels!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("6"),
        name: "Yu Rothenberg",
        email: "Yu.Rothenberg@example.com",
        message: "Hi I'm Yu Rothenberg!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("7"),
        name: "Golshan Ó Gráda",
        email: "Golshan.Ó.Gráda@example.com",
        message: "Hi I'm Golshan Ó Gráda!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
    {
        _id: new ObjectId("8"),
        name: "Dəniz Marchesi",
        email: "Dəniz.Marchesi@example.com",
        message: "Hi I'm Dəniz Marchesi!",
        createdAt: new Date("2024-11-29T22:36:00"),
    },
];

export const CONTACTS: Contact[] = [...CONTACTS_BASE];

export const CONTACT_REQUEST: ContactRequest = {
    name: CONTACTS_BASE[0].name,
    email: CONTACTS_BASE[0].email,
    message: CONTACTS_BASE[0].message,
};
