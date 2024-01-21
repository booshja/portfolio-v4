import Image from "next/image";
import ExternalLinkImage from "@/public/icons/external-link.svg";
import ExternalLinkImageBlack from "@/public/icons/external-link-black.svg";
import { ExternalLinkStyled, ImageContainerStyled } from "./ExternalLinkStyled";
import testingIds from "@/testing/testingIds";

interface ExternalLinkProps {
    href: string;
    testId: string;
    text: string;
    inline?: boolean;
    card?: boolean;
}

const testIds = testingIds.components.externalLink;

export const ExternalLink = ({
    href,
    text,
    testId,
    inline = false,
    card = false,
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
                style={{ objectFit: "contain", aspectRatio: "1/1" }}
                data-testid={testIds.image}
            />
        </ImageContainerStyled>
    </ExternalLinkStyled>
);
