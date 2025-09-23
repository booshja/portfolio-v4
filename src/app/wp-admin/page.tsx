import type { Metadata } from "next";
import Image from "next/image";

import BugsNo from "@/public/images/bugs-bunnys-no.png";
import testingIds from "@/testing/testingIds";

import { WPAdminPageContainerStyled } from "./_pageStyled";

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
    title: "No no no - Not WordPress",
};

const testIds = testingIds.pages.wpAdmin;

export default function WPAdmin() {
    return (
        <WPAdminPageContainerStyled data-testid={testIds.container}>
            <Image
                src={BugsNo}
                alt="Bugs Bunny saying no meme"
                priority
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                data-testid={testIds.image}
            />
        </WPAdminPageContainerStyled>
    );
}
