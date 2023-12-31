"use client";

import { colors, spacing, lineHeight } from "@/utils/constants";
import styled from "styled-components";

interface ExternalLinkStyledProps {
    $inline?: boolean;
}

export const ExternalLinkStyled = styled.a<ExternalLinkStyledProps>`
    display: ${({ $inline }) => ($inline ? "inline-flex" : "flex")};
    gap: ${spacing.xs}px;
    color: ${colors.link};
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    height: ${lineHeight.md}px;
    width: fit-content;
`;
