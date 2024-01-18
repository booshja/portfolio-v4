"use client";

import { breakpoints, colors, lineHeight, spacing } from "@/utils/constants";
import { PageContainerStyled, animations } from "../GlobalStyled";
import styled from "styled-components";

export const ExpPageContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    gap: ${spacing.lg}px;
`;

export const ExpPageHeaderStyled = styled.h1`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;
    text-transform: uppercase;
    ${animations.slideInLeft};

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        font-size: ${spacing["5xl"]}px;
        line-height: ${lineHeight["5xl"]}px;
    }
`;
