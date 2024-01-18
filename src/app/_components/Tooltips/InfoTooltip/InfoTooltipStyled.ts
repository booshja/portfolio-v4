"use client";

import {
    breakpoints,
    colors,
    fontWeight,
    lineHeight,
    spacing,
} from "@/utils/constants";
import styled from "styled-components";

interface InfoTooltipStyledProps {
    $visible: boolean;
}

export const InfoTooltipStyled = styled.span<InfoTooltipStyledProps>`
    visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
    min-width: 100px;
    height: 20px;
    background-color: ${colors.black};
    color: ${colors.text};
    font-size: 12px;
    font-weight: ${fontWeight.bold};
    line-height: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    border: 2px solid #676e95;
    border-radius: ${spacing.sm}px;
    padding: 12px;
    position: absolute;
    z-index: 1;
    top: -150%;
    right: 0;
    margin-top: ${spacing.xs}px;
    margin-left: -60px;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: all 250ms ease-in-out;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.md}px;
        padding: 18px 12px;
        top: -125%;
    }
`;
