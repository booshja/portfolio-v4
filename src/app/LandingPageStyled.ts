"use client";

import { colors, spacing, lineHeight } from "@/utils/constants";
import { PageContainerStyled } from "./GlobalStyled";
import styled from "styled-components";

export const LandingPageStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NameStyled = styled.h1`
    color: ${colors.text};
    display: flex;
    flex-direction: column;
    font-size: ${spacing.xxxl}px;
    line-height: ${lineHeight.xxxl}px;
    width: 80%;
    margin-bottom: ${spacing.md}px;
`;

export const FirstNameStyled = styled.span`
    align-self: flex-start;
`;

export const LastNameStyled = styled.span`
    align-self: flex-end;
`;

export const JobTitleStyled = styled.h2`
    color: ${colors.text};
`;