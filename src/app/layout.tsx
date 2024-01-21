import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import "./globals.css";
import { ConsoleLog, Copyright, Navbar } from "@/components/index";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jacob Andes - Software Engineer",
    description:
        "Personal portfolio for Jacob Andes, software engineer based in the United States.",
    generator: "Next.js",
    applicationName: "Jacob Andes Personal Portfolio",
    category: "technology",
    referrer: "origin-when-cross-origin",
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
    authors: [{ name: "Jacob Andes", url: "https://github.com/booshja" }],
    creator: "Jacob Andes",
    publisher: "Jacob Andes",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
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
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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
