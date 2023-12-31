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
                    <ExternalLink href={codeLink} text="Code" testId="" />
                    {" | "}
                    <ExternalLink href={liveLink} text="Live" testId="" />
                </>
            );
        } else if (codeLink && !liveLink) {
            return <ExternalLink href={codeLink} text="Code" testId="" />;
        } else if (liveLink) {
            return <ExternalLink href={liveLink} text="Live" testId="" />;
        }
    };

    return (
        <CardStyled data-testid="">
            <ImageSectionStyled data-testid="">
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
                    data-testid=""
                />
            </ImageSectionStyled>
            <TextSectionStyled data-testid="">
                <HeaderSectionStyled $reverse={reverseAlignment} data-testid="">
                    <PositionStyled data-testid="">0{position}</PositionStyled>
                    <NameStyled $reverse={reverseAlignment} data-testid="">
                        {name}
                    </NameStyled>
                </HeaderSectionStyled>
                {type === "job" ? (
                    <JobTitleStyled $reverse={reverseAlignment} data-testid="">
                        {title}
                    </JobTitleStyled>
                ) : (
                    <LinkSectionStyled $reverse={reverseAlignment} data-testid="">
                        {linkLine()}
                    </LinkSectionStyled>
                )}
                <DescriptionStyled data-testid="">{description}</DescriptionStyled>
            </TextSectionStyled>
        </CardStyled>
    );
};
