"use client";

import { colors, spacing, fontWeight } from "@/utils/constants";
import Link from "next/link";
import styled from "styled-components";

interface NextNavLinkStyledProps {
    active: "true" | "false";
}

export const ANavLinkStyled = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    gap: ${spacing.xs}px;
    color: ${colors.link};
`;

export const NextNavLinkStyled = styled(Link)<NextNavLinkStyledProps>`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${({ active }) =>
        active === "true" ? fontWeight.bold : fontWeight.regular};
    color: ${colors.link};
`;
