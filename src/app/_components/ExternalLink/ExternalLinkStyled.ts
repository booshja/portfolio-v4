"use client";

import {
    colors,
    spacing,
    lineHeight,
    fontWeight,
    breakpoints,
} from "@/utils/constants";
import styled from "styled-components";

interface ExternalLinkStyledProps {
    $inline: boolean;
    $card: boolean;
}

export const ExternalLinkStyled = styled.a<ExternalLinkStyledProps>`
    display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};
    gap: ${spacing.xs}px;
    color: ${({ $card }) => ($card ? colors.black : colors.link)};
    font-size: ${spacing.md}px;
    font-weight: ${fontWeight.regular};
    line-height: ${lineHeight.md}px;
    height: ${lineHeight.md}px;
    width: fit-content;
    text-decoration: ${"underline"};
    position: relative;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.lg}px;
        line-height: ${lineHeight.lg}px;
        height: ${lineHeight.lg}px;
        gap: ${spacing.sm}px;
    }
`;

export const ImageContainerStyled = styled.span`
    display: block;
    position: relative;
    width: ${spacing.md}px;
    height: ${spacing.md}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        width: ${spacing.lg}px;
        height: ${spacing.lg}px;
    }
`;
