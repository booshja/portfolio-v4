"use client";

import styled from "styled-components";
import { colors, spacing } from "@/utils/constants";

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
`;
