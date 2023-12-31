"use client";

import { colors, fontWeight, spacing } from "@/utils/constants";
import styled from "styled-components";

export const CopyrightFooterStyled = styled.footer`
    position: absolute;
    bottom: ${spacing.sm}px;
    right: ${spacing.sm}px;
`;

export const CopyrightTextStyled = styled.p`
    font-size: ${spacing.sm}px;
    color: ${colors.text};
`;
