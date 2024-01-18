import {
    NotFoundContainerStyled,
    NotFoundHeaderStyled,
    NotFoundImageContainerStyled,
    NotFoundLinkStyled,
    NotFoundTextStyled,
} from "./NotFoundStyled";
import Maps from "@/public/images/maps.jpeg";
import Image from "next/image";
import testingIds from "@/testing/testingIds";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not Found",
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
            <NotFoundLinkStyled href="/" data-testid={testIds.link}>
                Go back home
            </NotFoundLinkStyled>
            <NotFoundImageContainerStyled>
                <Image
                    src={Maps}
                    alt="A stack of different maps"
                    priority
                    fill
                    style={{ objectFit: "contain" }}
                    data-testid={testIds.image}
                />
            </NotFoundImageContainerStyled>
        </NotFoundContainerStyled>
    );
}
