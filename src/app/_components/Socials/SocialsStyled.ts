"use client";

import styled from "styled-components";
import { colors, fontWeight, lineHeight, spacing } from "@/utils/constants";

interface SocialsStyledProps {
    $horizontal: boolean;
}

export const SocialsContainerStyled = styled.aside<SocialsStyledProps>`
    display: flex;
    gap: ${spacing.sm}px;
    align-items: center;
`;

export const SocialsTextStyled = styled.p`
    color: ${colors.text};
    text-transform: uppercase;
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
`;

export const SocialsDividerStyled = styled.div`
    border: 1px solid ${colors.text};
    width: ${spacing["4xl"]}px;
`;

export const SocialsLinkStyled = styled.a``;
