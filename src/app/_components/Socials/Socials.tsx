import Image from "next/image";

const GITHUB_SRC = "/icons/github-white.svg" as const;
const LINKEDIN_SRC = "/icons/linkedin-white.svg" as const;
import testingIds from "@/testing/testingIds";
import { breakpoints, spacing, strings } from "@/utils/constants";

import {
    SocialsContainerStyled,
    SocialsDividerStyled,
    SocialsLinkStyled,
    SocialsTextStyled,
} from "./SocialsStyled";

interface SocialsProps {
    horizontal?: boolean;
}

const testIds = testingIds.components.socials;
const { githubUrl, linkedInUrl } = strings;

export const Socials = ({ horizontal = false }: SocialsProps) => {
    return (
        <SocialsContainerStyled
            $horizontal={horizontal}
            data-testid={testIds.container}
        >
            <SocialsTextStyled data-testid={testIds.text}>find me</SocialsTextStyled>
            <SocialsDividerStyled data-testid={testIds.divider} />
            <SocialsLinkStyled
                data-testid={testIds.link}
                href={githubUrl}
                target="_blank"
            >
                <Image
                    alt="Github profile"
                    data-testid={testIds.icon}
                    fill
                    sizes={`(max-width: ${breakpoints.mobileLg}px) ${spacing.xl}px, ${spacing.xxl}px`}
                    src={GITHUB_SRC}
                />
            </SocialsLinkStyled>
            <SocialsLinkStyled
                data-testid={testIds.link}
                href={linkedInUrl}
                target="_blank"
            >
                <Image
                    alt="LinkedIn profile"
                    data-testid={testIds.icon}
                    fill
                    sizes={`(max-width: ${breakpoints.mobileLg}px) ${spacing.xl}px, ${spacing.xxl}px`}
                    src={LINKEDIN_SRC}
                />
            </SocialsLinkStyled>
        </SocialsContainerStyled>
    );
};
