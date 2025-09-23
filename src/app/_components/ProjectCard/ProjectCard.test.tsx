import { screen, render } from "@testing-library/react";

import type { Project } from "@/app/experience/_projects";
import testingIds from "@/testing/testingIds";

import { ProjectCard } from "./";

const testIds = testingIds.components.projectCard;

const jobProject: Project = {
    description: "Test Description",
    id: "abcd123",
    imageName: "default",
    name: "Test Project",
    position: 1,
    title: "Test Title",
    type: "job",
};
const projectProject: Project = {
    codeLink: "https://github.com",
    description: "Test Description",
    id: "abcd123",
    imageName: "default",
    liveLink: "https://github.com",
    name: "Test Project",
    position: 1,
    type: "project",
};

describe("ProjectCard Component", () => {
    it("renders the ProjectCard component correctly: Job Type", () => {
        render(<ProjectCard {...jobProject} />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.imageSection)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.position)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.name)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.jobTitle)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.description)).toBeInTheDocument();
    });

    describe("Project Type", () => {
        it("renders the ProjectCard component correctly with both links", () => {
            render(<ProjectCard {...projectProject} />);

            expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.imageSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.position)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.name)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.linkSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.codeLink)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.liveLink)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.description)).toBeInTheDocument();
        });

        it("renders the ProjectCard component correctly with code link", () => {
            projectProject.liveLink = undefined;

            render(<ProjectCard {...projectProject} />);

            expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.imageSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.position)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.name)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.linkSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.codeLink)).toBeInTheDocument();
            expect(screen.queryByTestId(testIds.liveLink)).not.toBeInTheDocument();
            expect(screen.getByTestId(testIds.description)).toBeInTheDocument();
        });

        it("renders the ProjectCard component correctly with live link", () => {
            projectProject.liveLink = "https://github.com";
            projectProject.codeLink = undefined;

            render(<ProjectCard {...projectProject} />);

            expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.imageSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.textSection)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.position)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.name)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.linkSection)).toBeInTheDocument();
            expect(screen.queryByTestId(testIds.codeLink)).not.toBeInTheDocument();
            expect(screen.getByTestId(testIds.liveLink)).toBeInTheDocument();
            expect(screen.getByTestId(testIds.description)).toBeInTheDocument();
        });
    });
});
