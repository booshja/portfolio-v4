import Image from "next/image";
import ExternalLinkImage from "@/public/icons/external-link.svg";
import {
    MobileExternalNavLinkStyled,
    ImageContainerStyled,
} from "./MobileExternalNavLinkStyled";
import testingIds from "@/testing/testingIds";

interface MobileExternalNavLinkProps {
    href: string;
    testId: string;
    text: string;
}

const testIds = testingIds.components.externalLink;

export const MobileExternalNavLink = ({
    href,
    text,
    testId,
}: MobileExternalNavLinkProps) => (
    <MobileExternalNavLinkStyled href={href} target="_blank" data-testid={testId}>
        {text}
        <ImageContainerStyled>
            <Image
                src={ExternalLinkImage}
                alt="Link opens in external tab"
                fill
                style={{ objectFit: "contain", aspectRatio: "1/1" }}
                data-testid={testIds.image}
            />
        </ImageContainerStyled>
    </MobileExternalNavLinkStyled>
);
