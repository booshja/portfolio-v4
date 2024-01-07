"use client";

import { breakpoints, colors, fontWeight, spacing } from "@/utils/constants";
import Link from "next/link";
import styled from "styled-components";

export const LogoStyled = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.md}px;
    color: ${colors.link};

    @media (min-width: ${breakpoints.mobileLg}px) {
        font-size: ${spacing.lg}px;
    }
`;

export const MobileNavButton = styled.button`
    border: none;
    background-color: transparent;
    width: ${spacing.lg}px;
    height: ${spacing.lg}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;

    @media (min-width: ${breakpoints.mobileLg}px) {
        width: ${spacing.xl}px;
        height: ${spacing.xl}px;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        width: ${spacing.xl}px;
        height: ${spacing.xl}px;
    }
`;

export const NavbarStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${spacing.md}px;
    height: ${spacing.xxl}px;
    background-color: transparent;

    @media (min-width: ${breakpoints.mobileLg}px) {
        height: ${spacing.xxxl}px;
    }
`;

export const NavItemStyled = styled.li``;

export const NavListStyled = styled.ul`
    align-items: center;
    list-style: none;
    justify-content: space-between;
    display: none;
`;

export const NavSectionStyled = styled.section`
    display: flex;
    align-items: center;
`;
