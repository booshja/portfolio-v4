"use client";

import { breakpoints, spacing } from "@/utils/constants";
import styled from "styled-components";

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
`;
