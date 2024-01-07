"use client";

import styled from "styled-components";
import { PageContainerStyled } from "../GlobalStyled";
import { breakpoints, colors, lineHeight, spacing } from "@/utils/constants";

export const ContactPageContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    gap: ${spacing.lg}px;
`;

export const ContactInfoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;

    & > button {
        margin-left: ${spacing.md}px;
    }
`;

export const ExternalLinkContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;
    padding-left: ${spacing.md}px;
`;

export const ImageContainerStyled = styled.div`
    align-self: flex-end;
    width: 80vw;
    aspect-ratio: 1.5 / 1;
    position: relative;
`;

export const PageHeaderFirstSpanStyled = styled.span``;

export const PageHeaderSecondSpanStyled = styled.span`
    align-self: flex-end;
`;

export const PageHeaderStyled = styled.h1`
    color: ${colors.text};
    font-size: ${spacing.xxl}px;
    line-height: ${spacing.xxl}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;

    @media (min-width: ${breakpoints.mobileSm}px) {
        font-size: ${spacing.xxxl}px;
        line-height: ${spacing.xxxl}px;
    }
    @media (min-width: ${breakpoints.mobileLg}px) {
        width: 80%;
        margin-left: ${spacing.xl}px;
    }
    @media (min-width: ${breakpoints.tabletXs}px) {
        width: 60%;
        margin-left: ${spacing.xxl}px;
    }
`;

export const SubHeaderStyled = styled.h2`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;

    @media (min-width: ${breakpoints.tabletXs}px) {
        font-size: ${spacing.xxl}px;
        line-height: ${lineHeight.xxl}px;
    }
`;
