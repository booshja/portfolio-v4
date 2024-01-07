"use client";

import Link from "next/link";
import { colors, spacing } from "@/utils/constants";
import SadIceCream from "@/public/images/sad-ice-cream.jpeg";
import Image from "next/image";

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
            <div
                style={{ position: "relative", width: "80vw", aspectRatio: "1.5 / 1" }}
            >
                <Image
                    src={SadIceCream}
                    priority
                    fill
                    style={{ objectFit: "contain" }}
                    alt="A dropped waffle cone ice cream cone on a slab of rock with ice cream spilled out of it."
                />
            </div>
        </div>
    );
}
