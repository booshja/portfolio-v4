"use client";

import Link from "next/link";
import { colors, spacing } from "@/utils/constants";
import Image from "next/image";
import SadIceCream from "@/public/images/sad-ice-cream.jpeg";

export default function Error(error: Error & { digest?: string }) {
    return (
        <div
            style={{
                height: "100dvh",
                width: "100dvw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: spacing.md + "px",
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
            <Image
                src={SadIceCream}
                priority
                style={{ objectFit: "contain", width: "auto", height: "auto" }}
                alt="A dropped waffle cone ice cream cone on a slab of rock with ice cream spilled out of it."
            />
        </div>
    );
}
