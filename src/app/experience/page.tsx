import type { Metadata } from "next";

import testingIds from "@/testing/testingIds";

import { ProjectsList } from "../_components";
import { ExpPageContainerStyled, ExpPageHeaderStyled } from "./_pageStyled";
import { projects } from "./_projects";

export const metadata: Metadata = {
    description:
        "Experience for Jacob Andes, software engineer based in the United States.",
    title: "Experience - Jacob Andes",
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
