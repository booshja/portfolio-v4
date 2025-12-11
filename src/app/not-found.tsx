import type { Metadata } from "next";
import Image from "next/image";

import Maps from "@/public/images/maps.jpeg";
import testingIds from "@/testing/testingIds";

import {
    NotFoundContainerStyled,
    NotFoundHeaderStyled,
    NotFoundImageContainerStyled,
    NotFoundLinkStyled,
    NotFoundTextStyled,
} from "./NotFoundStyled";

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
    title: "Not Found",
};

const testIds = testingIds.pages.notFound;

export default function NotFound() {
    return (
        <NotFoundContainerStyled data-testid={testIds.container}>
            <NotFoundHeaderStyled data-testid={testIds.header}>
                Couldn&apos;t find that&hellip;
            </NotFoundHeaderStyled>
            <NotFoundTextStyled data-testid={testIds.text}>
                Seems we got lost&hellip;
            </NotFoundTextStyled>
            <NotFoundLinkStyled data-testid={testIds.link} href="/">
                Go back home
            </NotFoundLinkStyled>
            <NotFoundImageContainerStyled>
                <Image
                    alt="A stack of different maps"
                    data-testid={testIds.image}
                    fill
                    priority
                    src={Maps}
                    style={{ objectFit: "contain" }}
                />
            </NotFoundImageContainerStyled>
        </NotFoundContainerStyled>
    );
}
