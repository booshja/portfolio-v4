"use client";

import { spacing } from "@/utils/constants";
import styled from "styled-components";

export const PageContainerStyled = styled.main`
    padding: ${spacing.sm}px ${spacing.lg}px ${spacing.lg}px ${spacing.lg}px;
    /* full mobile window - navbar - copyright footer */
    min-height: calc(100dvh - ${spacing.xxl}px - ${spacing.xl}px);
`;
