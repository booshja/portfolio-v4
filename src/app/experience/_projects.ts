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
        id: crypto.randomUUID(),
        position: 1,
        name: "Smartsheet",
        type: "job",
        title: "Software Engineer II",
        description:
            "TypeScript, React, Emotion, Kotlin, Ktor, Terraform, Java, Spring, AWS, Redux Toolkit, Backbone/CoffeeScript, Ruby, Rails",
        imageName: "smartsheet",
    },
    {
        id: crypto.randomUUID(),
        position: 2,
        name: "Smartsheet",
        type: "job",
        title: "Software Engineer I",
        description:
            "TypeScript, React, Emotion, Kotlin, Ktor, Terraform, Java, Spring, AWS, Redux Toolkit, Backbone/CoffeeScript, Ruby, Rails",
        imageName: "smartsheet",
    },
    {
        id: crypto.randomUUID(),
        position: 3,
        name: "Portfolio",
        type: "project",
        codeLink: "https://github.com/booshja/portfolio-v4",
        liveLink: "https://jacobandes.dev",
        description:
            "TypeScript, Next.js, styled-components, Plausable Analytics, Vercel",
        imageName: "portfolio",
    },
    {
        id: crypto.randomUUID(),
        position: 4,
        name: "Happy Harmony",
        type: "project",
        codeLink: "https://github.com/booshja/happy-harmony",
        liveLink: null,
        description:
            "TypeScript, Next.js, Emotion, Plausable Analytics, MongoDB, Auth0, Vercel",
        // imageName: 'happy-harmony',
        imageName: "default",
    },
    {
        id: crypto.randomUUID(),
        position: 5,
        name: "Previous Portfolio",
        type: "project",
        codeLink: "https://github.com/booshja/portfolio-v3-next",
        liveLink: null,
        description:
            "Javascript, Next.js, styled-components, Redux Toolkit, MongoDB, EmailJS, Vercel",
        imageName: "previous-portfolio",
    },
    {
        id: crypto.randomUUID(),
        position: 6,
        name: "Bttn",
        type: "job",
        title: "Software Engineer II",
        description:
            "Javascript, React, Redux Toolkit, RTK Query, Node, Express.js, styled-components, MongoDB, Auth0, Python, Django, PostgreSQL, Heroku",
        imageName: "bttn",
    },
    {
        id: crypto.randomUUID(),
        position: 7,
        name: "import/from Blog",
        type: "project",
        codeLink: null,
        liveLink: "https://importfrom.dev",
        description: "Javascript, Next.js, Emotion, Plausable Analytics, Auth0, Vercel",
        imageName: "import-from",
    },
];
