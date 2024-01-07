"use client";

import {
    breakpoints,
    colors,
    fontWeight,
    lineHeight,
    spacing,
} from "@/utils/constants";
import styled from "styled-components";

interface HeaderSectionStyledProps {
    $reverse: boolean;
}
interface JobTitleStyledProps {
    $reverse: boolean;
}
interface LinkSectionStyledProps {
    $reverse: boolean;
}
interface NameStyledProps {
    $reverse: boolean;
}

export const CardStyled = styled.article`
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: calc(${spacing.sm}px + ${spacing.md}px);
    background-color: ${colors.cardBackground};
    padding: ${spacing.md}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;
`;

export const ImageSectionStyled = styled.section`
    border-radius: ${spacing.sm}px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
`;

export const TextSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;
`;

export const HeaderSectionStyled = styled.div<HeaderSectionStyledProps>`
    display: flex;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    align-items: flex-start;
    justify-content: space-between;
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

export const NameStyled = styled.h2<NameStyledProps>`
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;
    text-align: ${({ $reverse }) => ($reverse ? "start" : "end")};

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
    }
`;

export const JobTitleStyled = styled.p<JobTitleStyledProps>`
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    font-weight: ${fontWeight.bold};
    align-self: ${({ $reverse }) => ($reverse ? "flex-start" : "flex-end")};

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.lg}px;
        line-height: ${lineHeight.lg}px;
        font-weight: ${fontWeight.regular};
    }
`;

export const DescriptionStyled = styled.p`
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    text-align: center;
`;

export const LinkSectionStyled = styled.div<LinkSectionStyledProps>`
    display: flex;
    align-items: center;
    justify-content: ${({ $reverse }) => ($reverse ? "flex-start" : "flex-end")};
    gap: ${spacing.sm}px;
`;
