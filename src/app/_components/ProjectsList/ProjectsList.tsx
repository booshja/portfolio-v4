"use client";

import { ProjectCard } from "../ProjectCard";
import type { Project } from "@/app/experience/_projects";

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
