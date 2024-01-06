"use client";

import styled from "styled-components";
import { spacing, lineHeight, colors } from "@/utils/constants";

export const TooltipTextStyled = styled.span`
    visibility: hidden;
    width: 100px;
    background-color: ${colors.black};
    color: ${colors.text};
    font-size: ${spacing.md}px;
    line-height: ${lineHeight.md}px;
    text-align: center;
    border-radius: ${spacing.sm}px;
    padding: ${spacing.sm}px 0;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-top: ${spacing.xs}px;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

export const TooltipStyled = styled.div`
    position: relative;
    display: inline-block;

    &:hover ${TooltipTextStyled} {
        visibility: visible;
        opacity: 1;
    }
`;
