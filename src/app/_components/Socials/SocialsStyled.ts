"use client";

import styled from "styled-components";
import {
    breakpoints,
    colors,
    fontWeight,
    lineHeight,
    spacing,
} from "@/utils/constants";

interface SocialsStyledProps {
    $horizontal: boolean;
}

export const SocialsContainerStyled = styled.aside<SocialsStyledProps>`
    display: flex;
    gap: ${spacing.sm}px;
    align-items: center;
`;

export const SocialsTextStyled = styled.p`
    color: ${colors.text};
    text-transform: uppercase;
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.lg}px;
        line-height: ${lineHeight.lg}px;
    }
`;

export const SocialsDividerStyled = styled.div`
    border: 1px solid ${colors.text};
    width: ${spacing["4xl"]}px;

    @media (min-width: ${breakpoints.mobileLg}px) {
        border: 2px solid ${colors.text};
    }
`;

export const SocialsLinkStyled = styled.a`
    width: ${spacing.xl}px;
    height: ${spacing.xl}px;
    position: relative;

    @media (min-width: ${breakpoints.mobileLg}px) {
        width: ${spacing.xxl}px;
        height: ${spacing.xxl}px;
    }
`;
