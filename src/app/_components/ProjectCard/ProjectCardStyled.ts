"use client";

import {
    breakpoints,
    colors,
    fontWeight,
    lineHeight,
    spacing,
} from "@/utils/constants";
import styled from "styled-components";

interface ReverseProps {
    $reverse: boolean;
}

export const CardStyled = styled.article<ReverseProps>`
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: calc(${spacing.sm}px + ${spacing.md}px);
    background-color: ${colors.cardBackground};
    padding: ${spacing.md}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
        height: 300px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    @media (min-width: ${breakpoints.tabletSm}px) {
        width: 90%;
        align-self: center;
    }
    @media (min-width: ${breakpoints.tabletLg}px) {
        width: 75%;
    }
`;

export const ImageSectionStyled = styled.section<ReverseProps>`
    border-radius: ${spacing.sm}px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;

    @media (min-width: ${breakpoints.tabletXs}px) {
        order: ${({ $reverse }) => ($reverse ? 1 : -1)};
    }
    @media (min-width: ${breakpoints.tabletSm}px) {
        height: 100%;
        width: unset;
        justify-self: ${({ $reverse }) => ($reverse ? "start" : "end")};
    }
`;

export const TextSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;
`;

export const HeaderSectionStyled = styled.div<ReverseProps>`
    display: flex;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    align-items: flex-start;
    justify-content: space-between;

    @media (min-width: ${breakpoints.tabletXs}px) {
        flex-direction: column;
        gap: ${spacing.sm}px;
        align-items: ${({ $reverse }) => ($reverse ? "flex-end" : "flex-start")};
    }
`;

export const PositionStyled = styled.p`
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
    }
`;

export const NameStyled = styled.h2<ReverseProps>`
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    text-align: ${({ $reverse }) => ($reverse ? "start" : "end")};

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
        text-align: ${({ $reverse }) => ($reverse ? "end" : "start")};
    }
`;

export const JobTitleStyled = styled.p<ReverseProps>`
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    font-weight: ${fontWeight.bold};
    align-self: ${({ $reverse }) => ($reverse ? "flex-start" : "flex-end")};

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.lg}px;
        line-height: ${lineHeight.lg}px;
        font-weight: ${fontWeight.regular};
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        align-self: ${({ $reverse }) => ($reverse ? "flex-end" : "flex-start")};
    }
`;

export const DescriptionStyled = styled.p<ReverseProps>`
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    text-align: center;

    @media (min-width: ${breakpoints.tabletXs}px) {
        text-align: ${({ $reverse }) => ($reverse ? "end" : "start")};
    }
`;

export const LinkSectionStyled = styled.div<ReverseProps>`
    display: flex;
    align-items: center;
    justify-content: ${({ $reverse }) => ($reverse ? "flex-start" : "flex-end")};
    gap: ${spacing.sm}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        justify-content: ${({ $reverse }) => ($reverse ? "flex-end" : "flex-start")};
    }
`;
