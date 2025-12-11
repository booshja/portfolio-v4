import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import jestPlugin from "eslint-plugin-jest";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    // Ignore non-source directories
    {
        ignores: [
            "**/node_modules/**",
            ".next/**",
            "coverage/**",
            "public/**",
            "dist/**",
            "next-env.d.ts",
            "**/*.config.*",
        ],
    },
    // Base JS recommendations
    js.configs.recommended,
    // TypeScript recommendations (type-aware)
    ...tseslint.configs.recommendedTypeChecked,

    // Bring in legacy-style shareable configs via compat for now
    ...compat.extends(
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:storybook/recommended",
        "next/core-web-vitals",
        "prettier"
    ),
    // Project-wide settings for TS type-aware rules
    {
        languageOptions: {
            parserOptions: {
                project: true, // auto-detect tsconfig.* in the repo
                tsconfigRootDir: __dirname,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                JSX: true,
            },
        },
    },
    // App/Lib code
    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        plugins: {
            "@next/next": nextPlugin,
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin,
            import: importPlugin,
            "unused-imports": unusedImportsPlugin,
            perfectionist: perfectionistPlugin,
            jest: jestPlugin,
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "([iI]gnored)|(_\\w+)",
                    argsIgnorePattern: "([iI]gnored)|(_\\w+)",
                    caughtErrors: "none",
                },
            ],
            "@typescript-eslint/prefer-includes": "off",
            "@typescript-eslint/restrict-plus-operands": "off",
            "jest/no-focused-tests": "error",
            "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
            "no-empty-function": "off",
            "no-restricted-imports": [
                "warn",
                {
                    patterns: [
                        {
                            group: ["*.css", "*.scss"],
                            message: "Please use CSS-in-JS.",
                        },
                        {
                            group: ["**/dist/"],
                            message:
                                "Deep imports from 'dist' are not allowed. Instead import from the package root.",
                        },
                    ],
                },
            ],
            "no-unused-vars": "off",
            "react-hooks/exhaustive-deps": "error",
            "react-hooks/rules-of-hooks": "error",
            "react/jsx-curly-spacing": ["error", { when: "never" }],
            "react/jsx-equals-spacing": ["error", "never"],
            "react/jsx-no-bind": "off",
            "react/jsx-tag-spacing": "error",
            "react/jsx-wrap-multilines": "error",
            "react/no-array-index-key": "error",
            "react/prop-types": "off",
            "react/self-closing-comp": "error",
            "react/react-in-jsx-scope": "off",
            "unused-imports/no-unused-imports": "error",
            // Allow CSS import in Next app root layout
            ...(true && {
                "no-restricted-imports": [
                    "warn",
                    {
                        patterns: [
                            {
                                group: ["**/dist/"],
                                message:
                                    "Deep imports from 'dist' are not allowed. Instead import from the package root.",
                            },
                        ],
                    },
                ],
            }),
            "no-useless-escape": "off",
            "@typescript-eslint/no-empty-object-type": "error",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "react/no-unescaped-entities": "error",
            "import/order": "off",
            "perfectionist/sort-imports": [
                "error",
                {
                    type: "natural",
                    order: "asc",
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling", "index"],
                    ],
                },
            ],
            "perfectionist/sort-objects": ["error", { type: "natural", order: "asc" }],
            "perfectionist/sort-jsx-props": [
                "error",
                { type: "natural", order: "asc" },
            ],
            "perfectionist/sort-enums": ["error", { type: "natural", order: "asc" }],
        },
    },
    {
        files: ["**/*.stories.*"],
        rules: {
            "react-hooks/rules-of-hooks": "off",
            "react-hooks/exhaustive-deps": "off",
        },
    },
    {
        files: ["**/*.{test,tests}.{ts,tsx,js,jsx}"],
        rules: {
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "react/display-name": "off",
        },
    },
];
