import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import "./globals.css";
import { Copyright, MobileNav, Navbar } from "@/components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jacob Andes - Software Engineer",
    description: "Portfolio for Jacob Andes, Software Engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <PlausibleProvider domain="jacobandes.dev" />
            </head>
            <body
                className={inter.className}
                style={{ backgroundColor: "#444267", height: "100dvh" }}
            >
                <StyledComponentsRegistry>
                    <Navbar />
                    {children}
                    <Copyright />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
