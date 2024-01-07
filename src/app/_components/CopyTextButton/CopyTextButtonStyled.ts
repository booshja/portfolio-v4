"use client";

import styled from "styled-components";
import { breakpoints, colors, spacing } from "@/utils/constants";

export const CopyTextButtonStyled = styled.button`
    border: none;
    background-color: transparent;
    color: ${colors.text};
    display: flex;
    align-items: center;
    gap: ${spacing.sm}px;
    padding: 0;
    width: fit-content;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.lg}px;
    }
`;
