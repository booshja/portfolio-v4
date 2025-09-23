import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Inter } from "next/font/google";

import "./globals.css";
import { ConsoleLog, Copyright, Navbar } from "@/components/index";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    },
    applicationName: "Jacob Andes Personal Portfolio",
    authors: [{ name: "Jacob Andes", url: "https://github.com/booshja" }],
    category: "technology",
    creator: "Jacob Andes",
    description:
        "Personal portfolio for Jacob Andes, software engineer based in the United States.",
    formatDetection: {
        address: false,
        email: false,
        telephone: false,
    },
    generator: "Next.js",
    keywords: [
        "Jacob",
        "Andes",
        "Jacob Andes",
        "Software",
        "Engineer",
        "Software Engineer",
        "Portfolio",
        "React",
        "Next.js",
        "TypeScript",
        "Styled Components",
    ],
    publisher: "Jacob Andes",
    referrer: "origin-when-cross-origin",
    // openGraph: {
    //     title: "Jacob Andes - Software Engineer",
    //     description:
    //         "Personal portfolio for Jacob Andes, software engineer based in the United States.",
    //     url: "https://jacobandes.dev",
    //     siteName: "Jacob Andes - Software Engineer",
    //     images: "https://jacobandes.dev/og-image.png",
    //     locale: "en_US",
    //     type: "website",
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Jacob Andes - Software Engineer",
    //     description:
    //         "Personal portfolio for Jacob Andes, software engineer based in the United States.",
    //     images: {
    //         url: "https://jacobandes.dev/twitter-og-image.png",
    //         alt: "Jacob Andes - Software Engineer",
    //     },
    // },
    robots: {
        follow: true,
        googleBot: {
            follow: true,
            index: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
            noimageindex: true,
        },
        index: true,
        nocache: true,
    },
    title: "Jacob Andes - Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <PlausibleProvider domain="jacobandes.dev" trackOutboundLinks />
            </head>
            <body
                className={inter.className}
                style={{ backgroundColor: "#444267", height: "100dvh" }}
            >
                <StyledComponentsRegistry>
                    <ConsoleLog />
                    <Navbar />
                    {children}
                    <Copyright />
                </StyledComponentsRegistry>
                <SpeedInsights />
            </body>
        </html>
    );
}
