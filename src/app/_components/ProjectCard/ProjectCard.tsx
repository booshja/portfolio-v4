import Image from "next/image";

import type { Project } from "@/app/experience/_projects";
import testingIds from "@/testing/testingIds";
import { getProjectImage } from "@/utils/helpers";

import { ExternalLink } from "../ExternalLink/ExternalLink";
import {
    CardStyled,
    DescriptionStyled,
    HeaderSectionStyled,
    ImageSectionStyled,
    JobTitleStyled,
    LinkSectionStyled,
    NameStyled,
    PositionStyled,
    TextSectionStyled,
} from "./ProjectCardStyled";

const testIds = testingIds.components.projectCard;

export const ProjectCard = ({
    codeLink,
    description,
    imageName,
    liveLink,
    name,
    position,
    title,
    type,
}: Project) => {
    const reverseAlignment = position % 2 === 0;

    const imageSrc = getProjectImage(imageName);

    const linkLine = () => {
        if (codeLink && liveLink) {
            return (
                <>
                    <ExternalLink
                        card
                        href={codeLink}
                        testId={testIds.codeLink}
                        text="Code"
                    />
                    {" | "}
                    <ExternalLink
                        card
                        href={liveLink}
                        testId={testIds.liveLink}
                        text="Live"
                    />
                </>
            );
        } else if (codeLink && !liveLink) {
            return (
                <ExternalLink
                    card
                    href={codeLink}
                    testId={testIds.codeLink}
                    text="Code"
                />
            );
        } else if (liveLink) {
            return (
                <ExternalLink
                    card
                    href={liveLink}
                    testId={testIds.liveLink}
                    text="Live"
                />
            );
        }
    };

    return (
        <CardStyled $reverse={reverseAlignment} data-testid={testIds.container}>
            <ImageSectionStyled
                $reverse={reverseAlignment}
                data-testid={testIds.imageSection}
            >
                <Image
                    alt={name}
                    data-testid={testIds.image}
                    fill
                    priority={position === 1}
                    sizes="80vw"
                    src={imageSrc}
                    style={{
                        boxShadow:
                            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        objectFit: "cover",
                    }}
                />
            </ImageSectionStyled>
            <TextSectionStyled data-testid={testIds.textSection}>
                <HeaderSectionStyled
                    $reverse={reverseAlignment}
                    data-testid={testIds.headerSection}
                >
                    <PositionStyled data-testid={testIds.position}>
                        0{position}
                    </PositionStyled>
                    <NameStyled $reverse={reverseAlignment} data-testid={testIds.name}>
                        {name}
                    </NameStyled>
                </HeaderSectionStyled>
                {type === "job" ? (
                    <JobTitleStyled
                        $reverse={reverseAlignment}
                        data-testid={testIds.jobTitle}
                    >
                        {title}
                    </JobTitleStyled>
                ) : (
                    <LinkSectionStyled
                        $reverse={reverseAlignment}
                        data-testid={testIds.linkSection}
                    >
                        {linkLine()}
                    </LinkSectionStyled>
                )}
                <DescriptionStyled
                    $reverse={reverseAlignment}
                    data-testid={testIds.description}
                >
                    {description}
                </DescriptionStyled>
            </TextSectionStyled>
        </CardStyled>
    );
};
