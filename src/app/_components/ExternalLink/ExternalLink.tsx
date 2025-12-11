import Image from "next/image";

const EXTERNAL_LINK_BLACK_SRC = "/icons/external-link-black.svg" as const;
const EXTERNAL_LINK_SRC = "/icons/external-link.svg" as const;
import testingIds from "@/testing/testingIds";

import { ExternalLinkStyled, ImageContainerStyled } from "./ExternalLinkStyled";

interface ExternalLinkProps {
    href: string;
    testId: string;
    text: string;
    inline?: boolean;
    card?: boolean;
}

const testIds = testingIds.components.externalLink;

export const ExternalLink = ({
    card = false,
    href,
    inline = false,
    testId,
    text,
}: ExternalLinkProps) => (
    <ExternalLinkStyled
        $card={card}
        $inline={inline}
        data-testid={testId}
        href={href}
        target="_blank"
    >
        {text}
        <ImageContainerStyled>
            <Image
                alt="Link opens in external tab"
                data-testid={testIds.image}
                fill
                sizes="24px"
                src={card ? EXTERNAL_LINK_BLACK_SRC : EXTERNAL_LINK_SRC}
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
            />
        </ImageContainerStyled>
    </ExternalLinkStyled>
);
