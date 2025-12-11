export const colors = {
    background: "#444267",
    black: "#000000",
    cardBackground: "#8D95C4",
    link: "#FFFFFF",
    mobileNavBackground: "#292D3E",
    text: "#FFFFFF",
} as const;

export const spacing = {
    "4xl": 96,
    "5xl": 128,
    "6xl": 192,
    "7xl": 256,
    "8xl": 384,
    lg: 24,
    md: 16,
    sm: 8,
    xl: 32,
    xs: 4,
    xxl: 48,
    xxxl: 64,
} as const;

export const lineHeight = {
    "4xl": spacing["4xl"] * 1.2,
    "5xl": spacing["5xl"] * 1.2,
    "6xl": spacing["6xl"] * 1.2,
    "7xl": spacing["7xl"] * 1.2,
    lg: spacing.lg * 1.2,
    md: spacing.md * 1.2,
    sm: spacing.sm * 1.2,
    xl: spacing.xl * 1.2,
    xs: spacing.xs * 1.2,
    xxl: spacing.xxl * 1.2,
    xxxl: spacing.xxxl * 1.2,
};

export const fontWeight = {
    bold: 700,
    light: 300,
    regular: 400,
} as const;

export const strings = {
    blogUrl: "https://importfrom.dev",
    contactEmail: "jacobandesdev@gmail.com",
    githubUrl: "https://github.com/booshja",
    linkedInUrl: "https://www.linkedin.com/in/jacobandes",
} as const;

export const breakpoints = {
    desktopLg: 1440,
    desktopMd: 1366,
    desktopSm: 1280,
    mobileLg: 414,
    mobileMd: 390,
    mobileSm: 360,
    mobileXs: 280,
    tabletLg: 962,
    tabletMd: 810,
    tabletSm: 768,
    tabletXs: 601,
} as const;
