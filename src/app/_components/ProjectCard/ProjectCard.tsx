import { ExternalLink } from "../ExternalLink";
import Image from "next/image";
import testingIds from "@/testing/testingIds";
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
import type { Project } from "@/app/experience/_projects";
import { getProjectImage } from "@/utils/helpers";

interface ProjectCardProps extends Project {}

const testIds = testingIds.components.projectCard;

export const ProjectCard = ({
    name,
    position,
    type,
    codeLink,
    liveLink,
    title,
    description,
    imageName,
}: ProjectCardProps) => {
    const reverseAlignment = position % 2 === 0;

    const imageSrc = getProjectImage(imageName);

    const linkLine = () => {
        if (codeLink && liveLink) {
            return (
                <>
                    <ExternalLink
                        href={codeLink}
                        text="Code"
                        card
                        testId={testIds.codeLink}
                    />
                    {" | "}
                    <ExternalLink
                        href={liveLink}
                        text="Live"
                        card
                        testId={testIds.liveLink}
                    />
                </>
            );
        } else if (codeLink && !liveLink) {
            return (
                <ExternalLink
                    href={codeLink}
                    text="Code"
                    card
                    testId={testIds.codeLink}
                />
            );
        } else if (liveLink) {
            return (
                <ExternalLink
                    href={liveLink}
                    text="Live"
                    card
                    testId={testIds.liveLink}
                />
            );
        }
    };

    return (
        <CardStyled data-testid={testIds.container}>
            <ImageSectionStyled data-testid={testIds.imageSection}>
                <Image
                    src={imageSrc}
                    alt={name}
                    priority={position === 1}
                    fill
                    sizes="80vw"
                    style={{
                        objectFit: "cover",
                        boxShadow:
                            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                    }}
                    data-testid={testIds.image}
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
                <DescriptionStyled data-testid={testIds.description}>
                    {description}
                </DescriptionStyled>
            </TextSectionStyled>
        </CardStyled>
    );
};
