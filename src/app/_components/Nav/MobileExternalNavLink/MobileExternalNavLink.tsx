import Image from "next/image";

import ExternalLinkImage from "@/public/icons/external-link.svg";
import testingIds from "@/testing/testingIds";

import {
    MobileExternalNavLinkStyled,
    ImageContainerStyled,
} from "./MobileExternalNavLinkStyled";

interface MobileExternalNavLinkProps {
    href: string;
    testId: string;
    text: string;
}

const testIds = testingIds.components.mobileExternalNavLink;

export const MobileExternalNavLink = ({
    href,
    testId,
    text,
}: MobileExternalNavLinkProps) => (
    <MobileExternalNavLinkStyled href={href} target="_blank" data-testid={testId}>
        {text}
        <ImageContainerStyled>
            <Image
                src={ExternalLinkImage}
                alt="Link opens in external tab"
                fill
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
                data-testid={testIds.image}
            />
        </ImageContainerStyled>
    </MobileExternalNavLinkStyled>
);
