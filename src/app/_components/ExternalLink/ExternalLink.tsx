import Image from "next/image";
import ExternalLinkImage from "@/public/icons/external-link.svg";
import { ExternalLinkStyled } from "./ExternalLinkStyled";
import { spacing } from "@/utils/constants";
import testingIds from "@/testing/testingIds";

interface ExternalLinkProps {
    href: string;
    testId: string;
    text: string;
    inline?: boolean;
}

const testIds = testingIds.components.externalLink;

export const ExternalLink = ({
    href,
    text,
    testId,
    inline = false,
}: ExternalLinkProps) => (
    <ExternalLinkStyled
        href={href}
        target="_blank"
        data-testid={testId}
        $inline={inline}
    >
        {text}
        <Image
            src={ExternalLinkImage}
            width={spacing.md}
            height={spacing.md}
            alt="Link opens in external tab"
            style={{ objectFit: "contain" }}
            data-testid={testIds.image}
        />
    </ExternalLinkStyled>
);
