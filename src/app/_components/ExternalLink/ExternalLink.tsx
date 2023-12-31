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
    mobileNav?: boolean;
}

const testIds = testingIds.components.externalLink;

export const ExternalLink = ({
    href,
    text,
    testId,
    inline = false,
    mobileNav = false,
}: ExternalLinkProps) => {
    const iconSize = mobileNav ? spacing.lg : spacing.md;

    return (
        <ExternalLinkStyled
            href={href}
            target="_blank"
            data-testid={testId}
            $inline={inline}
            $mobileNav={mobileNav}
        >
            {text}
            <Image
                src={ExternalLinkImage}
                alt="Link opens in external tab"
                width={iconSize}
                height={iconSize}
                style={{ objectFit: "contain" }}
                data-testid={testIds.image}
            />
        </ExternalLinkStyled>
    );
};
