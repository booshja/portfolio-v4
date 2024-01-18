"use client";

import styled from "styled-components";
import { spacing, colors, lineHeight, breakpoints } from "@/utils/constants";
import { PageContainerStyled } from "../GlobalStyled";

export const AboutPageContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.tabletXs}px) {
        gap: ${spacing.md}px;
    }
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: ${spacing.md}px;

    @media (min-width: ${breakpoints.desktopSm}px) {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: ${spacing.lg}px;
    }
`;

export const HeaderStyled = styled.h1`
    color: ${colors.text};
    font-size: ${spacing.xxl}px;
    line-height: ${lineHeight.xxl}px;
    display: flex;
    flex-direction: column;

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xxxl}px;
        line-height: ${lineHeight.xxxl}px;
    }
    @media (min-width: ${breakpoints.mobileLg}px) {
        margin-left: ${spacing.xl}px;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        flex-direction: row;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        flex-direction: column;
        font-size: ${spacing["5xl"]}px;
        line-height: ${lineHeight["5xl"]}px;
    }
`;

export const HeaderFirstWordStyled = styled.span`
    text-transform: uppercase;
`;

export const HeaderSecondWordStyled = styled.span`
    margin-left: ${spacing.xxl}px;
    text-transform: uppercase;

    @media (min-width: ${breakpoints.tabletXs}px) {
        margin-left: 0;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        margin-left: ${spacing["6xl"]}px;
    }
`;

export const GreetingHeaderStyled = styled.h2`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
`;

export const GreetingTextStyled = styled.p`
    color: ${colors.text};
    text-align: center;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.lg}px;
        line-height: ${lineHeight.lg}px;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        text-align: left;
        line-height: ${lineHeight.xl}px;
    }
`;

export const TextContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;
`;

export const SkillsHeaderStyled = styled.h2`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
`;

export const SkillUsageHeaderStyled = styled.h3`
    color: ${colors.text};
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    margin-left: ${spacing.md}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
    }
`;

export const SkillListStyled = styled.ul`
    margin-left: ${spacing.lg}px;
    padding: 0;
    list-style-type: none;
    color: ${colors.text};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.md}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${breakpoints.tabletMd}px) {
        font-size: ${spacing.lg}px;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        grid-template-columns: repeat(4, 1fr);
        width: 175%;
    }
`;

export const ImageContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    position: relative;
    aspect-ratio: 1.33 / 1;
    width: 80vw;

    @media (min-width: ${breakpoints.tabletLg}px) {
        width: 50vw;
    }
    @media (min-width: ${breakpoints.desktopSm}px) {
        width: 40vw;
        align-self: start;
        height: 550px;
        align-items: flex-end;
    }
`;
