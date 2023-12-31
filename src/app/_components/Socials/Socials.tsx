import testingIds from "@/testing/testingIds";
import Image from "next/image";
import Github from "@/public/icons/github-white.svg";
import LinkedIn from "@/public/icons/linkedin-white.svg";
import { strings } from "@/utils/constants";
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
                href={githubUrl}
                target="_blank"
                data-testid={testIds.link}
            >
                <Image
                    src={Github}
                    height={32}
                    width={32}
                    alt="Github profile"
                    data-testid={testIds.icon}
                />
            </SocialsLinkStyled>
            <SocialsLinkStyled
                href={linkedInUrl}
                target="_blank"
                data-testid={testIds.link}
            >
                <Image
                    src={LinkedIn}
                    height={32}
                    width={32}
                    alt="LinkedIn profile"
                    data-testid={testIds.icon}
                />
            </SocialsLinkStyled>
        </SocialsContainerStyled>
    );
};
