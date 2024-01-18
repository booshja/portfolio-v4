"use client";

import { colors, spacing, fontWeight, breakpoints } from "@/utils/constants";
import Link from "next/link";
import styled from "styled-components";

interface NextNavLinkStyledProps {
    $active: boolean;
}

export const ANavLinkStyled = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    color: ${colors.link};
    position: relative;
    font-size: ${spacing.lg}px;
    gap: ${spacing.sm}px;
    align-items: baseline;

    &:hover {
        font-style: italic;
    }
`;

export const ImageContainerStyled = styled.span`
    display: block;
    position: relative;
    width: ${spacing.lg}px;
    height: ${spacing.lg}px;
`;

export const NextNavLinkStyled = styled(Link)<NextNavLinkStyledProps>`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${({ $active }) => ($active ? fontWeight.bold : fontWeight.regular)};
    color: ${colors.link};
    font-size: ${spacing.lg}px;

    &:hover {
        font-style: italic;
    }
`;
