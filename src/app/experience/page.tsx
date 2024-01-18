import testingIds from "@/testing/testingIds";
import { projects } from "./_projects";
import { ExpPageContainerStyled, ExpPageHeaderStyled } from "./_pageStyled";
import { ProjectsList } from "../_components";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience - Jacob Andes",
    description:
        "Experience for Jacob Andes, software engineer based in the United States.",
};

const testIds = testingIds.pages.experience;

export default function Experience() {
    return (
        <ExpPageContainerStyled data-testid={testIds.container}>
            <ExpPageHeaderStyled data-testid={testIds.header}>
                Experience
            </ExpPageHeaderStyled>
            <ProjectsList projects={projects} />
        </ExpPageContainerStyled>
    );
}
