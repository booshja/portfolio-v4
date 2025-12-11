"use client";

import type { Project } from "@/app/experience/_projects";

import { ProjectCard } from "../ProjectCard/ProjectCard";

interface ProjectCardProps {
    projects: Project[];
}

export const ProjectsList = ({ projects }: ProjectCardProps) => (
    <>
        {projects.map((project) => (
            <ProjectCard {...project} key={project.id} />
        ))}
    </>
);
