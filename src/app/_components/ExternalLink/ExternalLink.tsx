import Image from "next/image";

import ExternalLinkImageBlack from "@/public/icons/external-link-black.svg";
import ExternalLinkImage from "@/public/icons/external-link.svg";
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
        href={href}
        target="_blank"
        data-testid={testId}
        $inline={inline}
        $card={card}
    >
        {text}
        <ImageContainerStyled>
            <Image
                src={card ? ExternalLinkImageBlack : ExternalLinkImage}
                alt="Link opens in external tab"
                fill
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
                data-testid={testIds.image}
            />
        </ImageContainerStyled>
    </ExternalLinkStyled>
);
