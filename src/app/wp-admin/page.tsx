import Image from "next/image";
import { WPAdminPageContainerStyled } from "./_pageStyled";
import testingIds from "@/testing/testingIds";
import BugsNo from "@/public/images/bugs-bunnys-no.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "No no no - Not WordPress",
    robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "none",
            "max-snippet": -1,
        },
    },
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
