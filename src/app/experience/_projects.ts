export type Project = {
    id: string;
    position: number;
    name: string;
    type: "project" | "job";
    codeLink?: string | null;
    liveLink?: string | null;
    title?: string;
    description: string;
    imageName: ImageName;
};

export type ImageName =
    | "default"
    | "bttn"
    | "smartsheet"
    | "portfolio"
    | "happy-harmony"
    | "previous-portfolio"
    | "import-from";

export const projects: Project[] = [
    {
        description:
            "TypeScript, React, Emotion, Redux, Java, Kotlin, Spring Boot, AWS",
        id: crypto.randomUUID(),
        imageName: "smartsheet",
        name: "Smartsheet",
        position: 1,
        title: "Software Engineer II",
        type: "job",
    },
    {
        description:
            "TypeScript, React, Emotion, Redux Toolkit, Backbone/CoffeeScript, Ruby, Rails, Terraform, Java, Kotlin, Ktor, Spring Boot, AWS",
        id: crypto.randomUUID(),
        imageName: "smartsheet",
        name: "Smartsheet",
        position: 2,
        title: "Software Engineer I",
        type: "job",
    },
    {
        description:
            "Javascript, React, Redux Toolkit, RTK Query, Node, Express.js, styled-components, MongoDB, Auth0, Python, Django, PostgreSQL, Heroku",
        id: crypto.randomUUID(),
        imageName: "bttn",
        name: "Bttn",
        position: 3,
        title: "Software Engineer II",
        type: "job",
    },
    {
        codeLink: "https://github.com/booshja/portfolio-v4",
        description:
            "TypeScript, Next.js, styled-components, Plausable Analytics, Vercel",
        id: crypto.randomUUID(),
        // imageName: 'portfolio',
        imageName: "default",
        liveLink: "https://jacobandes.dev",
        name: "Portfolio",
        position: 4,
        type: "project",
    },
    {
        codeLink: "https://github.com/booshja/happy-harmony",
        description:
            "TypeScript, Next.js, Emotion, Plausable Analytics, MongoDB, Auth0, Vercel",
        id: crypto.randomUUID(),
        // imageName: 'happy-harmony',
        imageName: "default",
        liveLink: null,
        name: "Happy Harmony",
        position: 5,
        type: "project",
    },
    {
        codeLink: "https://github.com/booshja/portfolio-v3-next",
        description:
            "Javascript, Next.js, styled-components, Redux Toolkit, MongoDB, EmailJS, Vercel",
        id: crypto.randomUUID(),
        imageName: "previous-portfolio",
        liveLink: null,
        name: "Previous Portfolio",
        position: 6,
        type: "project",
    },
    {
        codeLink: null,
        description: "Javascript, Next.js, Emotion, Plausable Analytics, Auth0, Vercel",
        id: crypto.randomUUID(),
        imageName: "import-from",
        liveLink: "https://importfrom.dev",
        name: "import/from Blog",
        position: 7,
        type: "project",
    },
];
