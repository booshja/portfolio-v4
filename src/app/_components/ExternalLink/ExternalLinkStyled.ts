"use client";

import { colors, spacing, lineHeight } from "@/utils/constants";
import styled from "styled-components";

export const ExternalLinkStyled = styled.a`
    display: flex;
    gap: ${spacing.xs}px;
    color: ${colors.link};
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    height: ${lineHeight.md}px;
    width: fit-content;
`;
