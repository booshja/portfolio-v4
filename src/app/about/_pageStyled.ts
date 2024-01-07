"use client";

import styled from "styled-components";
import { spacing, colors, lineHeight, breakpoints } from "@/utils/constants";
import { PageContainerStyled } from "../GlobalStyled";

export const AboutPageContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: ${spacing.md}px;
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
`;

export const HeaderFirstWordStyled = styled.span`
    text-transform: uppercase;
`;

export const HeaderSecondWordStyled = styled.span`
    margin-left: ${spacing.xxl}px;
    text-transform: uppercase;
`;

export const GreetingHeaderStyled = styled.h2`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;
`;

export const GreetingTextStyled = styled.p`
    color: ${colors.text};
    text-align: center;
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
`;

export const SkillUsageHeaderStyled = styled.h3`
    color: ${colors.text};
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    margin-left: ${spacing.md}px;
`;

export const SkillListStyled = styled.ul`
    margin-left: ${spacing.lg}px;
    padding: 0;
    list-style-type: none;
    color: ${colors.text};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.md}px;
`;

export const ImageContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    position: relative;
    aspect-ratio: 1.33 / 1;
    width: 80vw;
`;
