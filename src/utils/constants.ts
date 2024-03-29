export const colors = {
    background: "#444267",
    cardBackground: "#8D95C4",
    mobileNavBackground: "#292D3E",
    link: "#FFFFFF",
    text: "#FFFFFF",
    black: "#000000",
} as const;

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
    "4xl": 96,
    "5xl": 128,
    "6xl": 192,
    "7xl": 256,
    "8xl": 384,
} as const;

export const lineHeight = {
    xs: spacing.xs * 1.2,
    sm: spacing.sm * 1.2,
    md: spacing.md * 1.2,
    lg: spacing.lg * 1.2,
    xl: spacing.xl * 1.2,
    xxl: spacing.xxl * 1.2,
    xxxl: spacing.xxxl * 1.2,
    "4xl": spacing["4xl"] * 1.2,
    "5xl": spacing["5xl"] * 1.2,
    "6xl": spacing["6xl"] * 1.2,
    "7xl": spacing["7xl"] * 1.2,
};

export const fontWeight = {
    light: 300,
    regular: 400,
    bold: 700,
} as const;

export const strings = {
    contactEmail: "jacobandesdev@gmail.com",
    githubUrl: "https://github.com/booshja",
    linkedInUrl: "https://www.linkedin.com/in/jacobandes",
    blogUrl: "https://importfrom.dev",
} as const;

export const breakpoints = {
    mobileXs: 280,
    mobileSm: 360,
    mobileMd: 390,
    mobileLg: 414,
    tabletXs: 601,
    tabletSm: 768,
    tabletMd: 810,
    tabletLg: 962,
    desktopSm: 1280,
    desktopMd: 1366,
    desktopLg: 1440,
} as const;
