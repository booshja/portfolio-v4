"use client";

import styled from "styled-components";
import { colors, spacing } from "@/utils/constants";
import Link from "next/link";
import { PageContainerStyled } from "./GlobalStyled";

export const NotFoundContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacing.md}px;
`;

export const NotFoundHeaderStyled = styled.h1`
    color: ${colors.text};
`;

export const NotFoundTextStyled = styled.p`
    color: ${colors.text};
    margin-bottom: ${spacing.md}px;
`;

export const NotFoundLinkStyled = styled(Link)`
    color: ${colors.text};
    margin-bottom: ${spacing.md}px;
`;

export const NotFoundImageContainerStyled = styled.div`
    position: relative;
    width: 80vw;
    aspect-ratio: 1.5 / 1;
`;
