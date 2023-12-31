"use client";

import { colors, fontWeight, spacing } from "@/utils/constants";
import Link from "next/link";
import styled from "styled-components";

export const LogoStyled = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${fontWeight.bold};
    font-size: ${spacing.md}px;
    color: ${colors.link};
`;

export const MobileNavButton = styled.button`
    border: none;
    background-color: transparent;
    width: ${spacing.lg}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:hover {
        cursor: pointer;
    }
`;

export const NavbarStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${spacing.md}px;
    height: ${spacing.xxl}px;
    background-color: transparent;
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
