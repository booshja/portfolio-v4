export type Project = {
    id: string;
    position: number;
    name: string;
    type: "project" | "job";
    codeLink?: string | null;
    liveLink?: string | null;
    title?: string;
    description: string;
    imageLink: string;
};

export const projects: Project[] = [
    {
        id: crypto.randomUUID(),
        position: 1,
        name: "Smartsheet",
        type: "job",
        title: "Software Engineer I",
        description:
            "TypeScript, React, Emotion, Redux Toolkit, Backbone/CoffeeScript, Ruby, Rails, Terraform, Java, Spring, AWS",
        imageLink: "",
    },
    {
        id: crypto.randomUUID(),
        position: 2,
        name: "Portfolio",
        type: "project",
        codeLink: "https://github.com/booshja/portfolio-v4",
        liveLink: "https://jacobandes.dev",
        description:
            "TypeScript, Next.js, styled-components, Plausable Analytics, Vercel",
        imageLink: "",
    },
    {
        id: crypto.randomUUID(),
        position: 3,
        name: "Happy Harmony",
        type: "project",
        codeLink: "https://github.com/booshja/happy-harmony",
        liveLink: null,
        description:
            "TypeScript, Next.js, Emotion, Plausable Analytics, MongoDB, Auth0, Vercel",
        imageLink: "",
    },
    {
        id: crypto.randomUUID(),
        position: 4,
        name: "Bttn",
        type: "job",
        title: "Software Engineer II",
        description:
            "Javascript, React, Redux Toolkit, RTK Query, Node, Express.js, styled-components, MongoDB, Auth0, Python, Django, PostgreSQL, Heroku",
        imageLink: "",
    },
    {
        id: crypto.randomUUID(),
        position: 5,
        name: "import/from Blog",
        type: "project",
        codeLink: null,
        liveLink: "https://importfrom.dev",
        description: "Javascript, Next.js, Emotion, Plausable Analytics, Auth0, Vercel",
        imageLink: "",
    },
];
