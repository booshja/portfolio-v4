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

const defaultImageLink =
    "https://res.cloudinary.com/dkq1rli4x/image/upload/v1704345077/imagine-art-here-sign_plyy24.jpg";

export const projects: Project[] = [
    {
        id: crypto.randomUUID(),
        position: 1,
        name: "Smartsheet",
        type: "job",
        title: "Software Engineer I",
        description:
            "TypeScript, React, Emotion, Redux Toolkit, Backbone/CoffeeScript, Ruby, Rails, Terraform, Java, Spring, AWS",
        imageLink:
            "https://res.cloudinary.com/dkq1rli4x/image/upload/v1704344994/smartsheet-logo-vertical-square_ehcqyp.png",
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
        imageLink: defaultImageLink,
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
        imageLink: defaultImageLink,
    },
    {
        id: crypto.randomUUID(),
        position: 4,
        name: "Previous Portfolio",
        type: "project",
        codeLink: "https://github.com/booshja/portfolio-v3-next",
        liveLink: null,
        description:
            "Javascript, Next.js, styled-components, Redux Toolkit, MongoDB, EmailJS, Vercel",
        imageLink:
            "https://res.cloudinary.com/dkq1rli4x/image/upload/v1666635456/jacob-andes-dev_ybxbbq.png",
    },
    {
        id: crypto.randomUUID(),
        position: 5,
        name: "Bttn",
        type: "job",
        title: "Software Engineer II",
        description:
            "Javascript, React, Redux Toolkit, RTK Query, Node, Express.js, styled-components, MongoDB, Auth0, Python, Django, PostgreSQL, Heroku",
        imageLink:
            "https://res.cloudinary.com/dkq1rli4x/image/upload/v1704346134/bttn-logo_onit2q.jpg",
    },
    {
        id: crypto.randomUUID(),
        position: 6,
        name: "import/from Blog",
        type: "project",
        codeLink: null,
        liveLink: "https://importfrom.dev",
        description: "Javascript, Next.js, Emotion, Plausable Analytics, Auth0, Vercel",
        imageLink:
            "https://res.cloudinary.com/dkq1rli4x/image/upload/v1666635459/import-from_hrvsmr.png",
    },
];
