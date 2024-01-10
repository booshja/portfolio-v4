"use client";

import {
    colors,
    spacing,
    lineHeight,
    fontWeight,
    breakpoints,
} from "@/utils/constants";
import styled from "styled-components";

export const MobileExternalNavLinkStyled = styled.a`
    display: flex;
    justify-content: space-between;
    gap: ${spacing.xs}px;
    color: ${colors.link};
    font-size: ${spacing.lg}px;
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.lg}px;
    height: ${lineHeight.md}px;
    width: 100%;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
        gap: ${spacing.sm}px;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
        gap: ${spacing.md}px;
    }
    @media (min-width: ${breakpoints.tabletLg}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
        gap: ${spacing.sm}px;
    }
`;

export const ImageContainerStyled = styled.div`
    position: relative;
    width: ${spacing.lg}px;
    height: ${spacing.lg}px;

    @media (min-width: ${breakpoints.mobileLg}px) {
        width: ${spacing.xl}px;
        height: ${spacing.xl}px;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        width: ${spacing.xxl}px;
        height: ${spacing.xxl}px;
    }
    @media (min-width: ${breakpoints.tabletLg}px) {
        width: ${spacing.xl}px;
        height: ${spacing.xl}px;
    }
`;
