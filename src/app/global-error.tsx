"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SadIceCream from "@/public/images/sad-ice-cream.jpeg";
import { colors, spacing } from "@/utils/constants";

export const metadata: Metadata = {
    robots: {
        follow: false,
        googleBot: {
            follow: false,
            index: false,
            "max-image-preview": "none",
            "max-snippet": -1,
            "max-video-preview": -1,
            noimageindex: true,
        },
        index: false,
        nocache: false,
    },
    title: "Something went wrong",
};

export default function Error(_error: Error & { digest?: string }) {
    return (
        <div
            style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: "100dvh",
                padding: spacing.md + "px",
                width: "100dvw",
            }}
        >
            <h1 style={{ color: colors.text, textAlign: "center" }}>
                Something went wrong!
            </h1>
            <Link
                href="/"
                style={{ color: colors.link, marginBottom: spacing.md + "px" }}
            >
                Go back home
            </Link>
            <div
                style={{ aspectRatio: "1.5 / 1", position: "relative", width: "80vw" }}
            >
                <Image
                    alt="A dropped waffle cone ice cream cone on a slab of rock with ice cream spilled out of it."
                    fill
                    priority
                    src={SadIceCream}
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
}
