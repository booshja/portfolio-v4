"use client";

import styled from "styled-components";
import { PageContainerStyled } from "../GlobalStyled";
import { breakpoints, colors, lineHeight, spacing } from "@/utils/constants";

export const UsesPageContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;
`;

export const PageHeaderStyled = styled.h1`
    color: ${colors.text};
    font-size: ${spacing.xxl}px;
    line-height: ${lineHeight.xxl}px;

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xxxl}px;
        line-height: ${lineHeight.xxxl}px;
    }
`;

export const PageDescriptionStyled = styled.p`
    color: ${colors.text};
    padding-left: ${spacing.md}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.lg}px;
        line-height: ${lineHeight.lg}px;
    }
`;

export const SoftwareSectionHeaderStyled = styled.h2`
    color: ${colors.text};
    display: flex;
    flex-direction: column;
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        /* flex-direction: row; */
        gap: ${spacing.sm}px;
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
`;

export const SoftwareSectionHeaderFirstWordStyled = styled.span``;

export const SoftwareSectionHeaderSecondWordStyled = styled.span``;

export const SoftwareSectionHeaderThirdWordStyled = styled.span``;

export const SoftwareListStyled = styled.ul`
    color: ${colors.text};
    margin: 0;
    padding: 0 0 0 ${spacing.md}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
`;

export const HardwareSectionHeaderStyled = styled.h2`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
`;

export const HardwareListStyled = styled.ul`
    color: ${colors.text};
    margin: 0;
    padding: 0 0 0 ${spacing.md}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
`;
