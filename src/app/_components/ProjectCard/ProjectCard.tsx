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
// TODO: swap this out for actual images from cloudinary
import TempImage from "@/public/images/sad-ice-cream.jpeg";

interface ProjectCardProps extends Project {}

const testIds = testingIds.components.projectCard;

export const ProjectCard = ({
    id,
    name,
    position,
    type,
    codeLink,
    liveLink,
    title,
    description,
    imageLink,
}: ProjectCardProps) => {
    const reverseAlignment = position % 2 === 0;

    const linkLine = () => {
        if (codeLink && liveLink) {
            return (
                <>
                    <ExternalLink
                        href={codeLink}
                        text="Code"
                        testId={testIds.codeLink}
                    />
                    {" | "}
                    <ExternalLink
                        href={liveLink}
                        text="Live"
                        testId={testIds.liveLink}
                    />
                </>
            );
        } else if (codeLink && !liveLink) {
            return (
                <ExternalLink href={codeLink} text="Code" testId={testIds.codeLink} />
            );
        } else if (liveLink) {
            return (
                <ExternalLink href={liveLink} text="Live" testId={testIds.liveLink} />
            );
        }
    };

    return (
        <CardStyled data-testid={testIds.container}>
            <ImageSectionStyled data-testid={testIds.imageSection}>
                <Image
                    // src={imageLink}
                    src={TempImage}
                    alt={name}
                    style={{
                        objectFit: "contain",
                        width: "auto",
                        height: "auto",
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
