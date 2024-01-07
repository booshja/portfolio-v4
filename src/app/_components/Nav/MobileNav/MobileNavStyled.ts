"use client";

import Link from "next/link";
import styled from "styled-components";
import {
    breakpoints,
    colors,
    fontWeight,
    lineHeight,
    spacing,
} from "@/utils/constants";

interface ContainerStyledProps {
    $isOpen: boolean;
}

export const ContainerStyled = styled.section<ContainerStyledProps>`
    background-color: ${colors.mobileNavBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: ${spacing.xxxl}px;
    height: 100dvh;
    width: 100vw;
    padding-top: ${spacing["4xl"]}px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    @media (prefers-reduced-motion) {
        transition: none;
    }
`;

export const ClosingButtonStyled = styled.button`
    position: absolute;
    top: ${spacing.md}px;
    right: ${spacing.md}px;
    background: transparent;
    border: none;
    color: ${colors.text};
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.lg}px;

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.xl}px;
    }
`;

export const LogoStyled = styled(Link)`
    color: ${colors.link};
    text-decoration: none;
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.md}px;

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.lg}px;
        width: 80%;
        text-align: center;
    }
`;

export const NavListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${spacing.xl}px;
    list-style-type: none;
    padding: 0;
`;

export const NavItemStyled = styled.li`
    color: ${colors.link};
`;

export const NavLinkStyled = styled(Link)`
    color: ${colors.link};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.lg}px;
    line-height: ${lineHeight.lg}px;

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.xl}px;
        line-height: ${lineHeight.xl}px;
    }
`;
