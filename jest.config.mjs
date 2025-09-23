import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testEnvironment: "jest-environment-jsdom",
    preset: "ts-jest",
    transformIgnorePatterns: [
        "node_modules/(?!(jose|@vercel/flags|@vercel/edge-config)/)",
    ],
    moduleNameMapper: {
        "^@vercel/flags/next$": "<rootDir>/src/testing/__mocks__/vercelFlagsNext.ts",
        "^@vercel/edge-config$": "<rootDir>/src/testing/__mocks__/edgeConfigMock.ts",
    },
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -20,
        },
    },
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/src/**/*.{js,jsx,ts,tsx}",
        "!**/*.test.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/.next/**",
        "!**/.vscode/**",
        "!**/lib/**",
        "!**/types/**",
        "!**/src/**/{(layout),(error),(global-error)}.tsx",
    ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
