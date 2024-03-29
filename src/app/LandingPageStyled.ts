"use client";

import { breakpoints, colors, lineHeight, spacing } from "@/utils/constants";
import { PageContainerStyled, animations } from "./GlobalStyled";
import styled from "styled-components";

export const LandingPageStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: ${breakpoints.mobileMd}px) {
        gap: ${spacing.lg}px;
    }
`;

export const NameStyled = styled.h1`
    color: ${colors.text};
    display: flex;
    flex-direction: column;
    font-size: ${spacing.xxxl}px;
    line-height: ${lineHeight.xxxl}px;
    width: 100%;
    margin-bottom: ${spacing.md}px;

    @media (min-width: ${breakpoints.mobileSm}px) {
        width: 80%;
    }
    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.xxxl}px;
        line-height: ${lineHeight.xxxl}px;
        width: 70%;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing["4xl"]}px;
        line-height: ${lineHeight["4xl"]}px;
    }
    @media (min-width: ${breakpoints.tabletSm}px) {
        width: 60%;
    }
    @media (min-width: ${breakpoints.tabletMd}px) {
        width: 70%;
        font-size: ${spacing["5xl"]}px;
        line-height: ${lineHeight["5xl"]}px;
    }
    @media (min-width: ${breakpoints.tabletLg}px) {
        width: 60%;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        width: 70%;
        font-size: ${spacing["6xl"]}px;
        line-height: ${lineHeight["6xl"]}px;
    }
`;

export const FirstNameStyled = styled.span`
    align-self: flex-start;
    ${animations.slideInLeft};
`;

export const LastNameStyled = styled.span`
    align-self: flex-end;
    ${animations.slideInRight};
`;

export const JobTitleStyled = styled.h2`
    color: ${colors.text};
    ${animations.slideInUp};

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        font-size: ${spacing.xxxl}px;
        line-height: ${lineHeight.xxxl}px;
    }
`;
