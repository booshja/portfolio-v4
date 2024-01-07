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
    $mobileNav: boolean;
    $card: boolean;
}

export const ExternalLinkStyled = styled.a<ExternalLinkStyledProps>`
    display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};
    gap: ${spacing.xs}px;
    color: ${({ $card }) => ($card ? colors.black : colors.link)};
    font-size: ${({ $mobileNav }) => ($mobileNav ? spacing.lg : spacing.md)}px;
    font-weight: ${({ $mobileNav }) =>
        $mobileNav ? fontWeight.bold : fontWeight.regular};
    line-height: ${({ $mobileNav }) => ($mobileNav ? lineHeight.lg : lineHeight.md)}px;
    height: ${lineHeight.md}px;
    width: fit-content;
    text-decoration: ${({ $mobileNav }) => ($mobileNav ? "none" : "underline")};
    text-transform: ${({ $mobileNav }) => ($mobileNav ? "uppercase" : "none")};
    position: relative;

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${({ $mobileNav }) => ($mobileNav ? spacing.xl : spacing.lg)}px;
        line-height: ${({ $mobileNav }) =>
            $mobileNav ? lineHeight.xl : lineHeight.lg}px;
        height: ${({ $mobileNav }) => ($mobileNav ? lineHeight.xl : lineHeight.lg)}px;
    }
`;
