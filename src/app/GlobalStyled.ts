"use client";

import { breakpoints, spacing } from "@/utils/constants";
import styled, { css, keyframes } from "styled-components";

export const PageContainerStyled = styled.main`
    padding: ${spacing.sm}px ${spacing.lg}px ${spacing.lg}px ${spacing.lg}px;
    /* min-height calc: full mobile window - navbar - copyright footer */
    min-height: calc(100dvh - ${spacing.xxl}px - ${spacing.xl}px);

    @media (min-width: ${breakpoints.mobileLg}px) {
        padding: ${spacing.sm}px ${spacing.md}px ${spacing.md}px ${spacing.md}px;
        /* min-height calc: full mobile window - navbar - copyright footer */
        min-height: calc(100dvh - ${spacing.xxxl}px - ${spacing.xl}px);
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        padding: ${spacing.sm}px ${spacing.lg}px ${spacing.lg}px ${spacing.lg}px;
    }
    @media (min-width: ${breakpoints.desktopLg}px) {
        width: 1440px;
        margin-left: calc((100dvw - 1440px) / 2);
    }
`;

const slideLeft = keyframes`
    from {
        transform: translateX(var(--slide-in-left-var));
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(var(--slide-in-right-var));
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(var(--slide-up-var));
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
`;

const reducedMotion = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
`;

const slideInLeft = css`
    animation: ${reducedMotion} 500ms ease-in-out forwards;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideLeft} 500ms ease-in-out forwards;
    }
`;
const slideInRight = css`
    animation: ${reducedMotion} 500ms ease-in-out forwards;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideRight} 500ms ease-in-out forwards;
    }
`;
const slideInUp = css`
    animation: ${reducedMotion} 500ms ease-in-out forwards;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${slideUp} 500ms ease-in-out forwards;
    }
`;

export const animations = {
    slideInLeft,
    slideInRight,
    slideInUp,
};
