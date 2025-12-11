import Image from "next/image";

const EXTERNAL_LINK_SRC = "/icons/external-link.svg" as const;
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
    <MobileExternalNavLinkStyled data-testid={testId} href={href} target="_blank">
        {text}
        <ImageContainerStyled>
            <Image
                alt="Link opens in external tab"
                data-testid={testIds.image}
                fill
                sizes="24px"
                src={EXTERNAL_LINK_SRC}
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
            />
        </ImageContainerStyled>
    </MobileExternalNavLinkStyled>
);
