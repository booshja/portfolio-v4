import testingIds from "@/testing/testingIds";
import { projects } from "./_projects";
import { ExpPageContainerStyled, ExpPageHeaderStyled } from "./_pageStyled";
import { ProjectsList } from "../_components";

const testIds = testingIds.pages.experience;

export default function Experience() {
    return (
        <ExpPageContainerStyled data-testid="">
            <ExpPageHeaderStyled data-testid="">Experience</ExpPageHeaderStyled>
            <ProjectsList projects={projects} />
        </ExpPageContainerStyled>
    );
}
