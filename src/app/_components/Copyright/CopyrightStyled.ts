"use client";

import { breakpoints, colors, spacing } from "@/utils/constants";
import styled from "styled-components";

export const CopyrightFooterStyled = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: ${spacing.xl}px;
    padding-right: ${spacing.sm}px;
`;

export const CopyrightTextStyled = styled.p`
    font-size: ${spacing.sm}px;
    color: ${colors.text};
`;
