"use client";

import styled from "styled-components";
import { PageContainerStyled } from "../GlobalStyled";
import { colors, lineHeight, spacing } from "@/utils/constants";

export const ContactPageContainerStyled = styled(PageContainerStyled)`
    display: flex;
    flex-direction: column;
    gap: ${spacing.md}px;
`;

export const ContactInfoContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;

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
    width: 250px;
    height: 175px;
    position: relative;
`;

export const PageHeaderFirstSpanStyled = styled.span``;

export const PageHeaderSecondSpanStyled = styled.span`
    align-self: flex-end;
`;

export const PageHeaderStyled = styled.h1`
    color: ${colors.text};
    font-size: ${spacing.xxxl}px;
    line-height: ${spacing.xxxl}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing.sm}px;
`;

export const SubHeaderStyled = styled.h2`
    color: ${colors.text};
    font-size: ${spacing.xl}px;
    line-height: ${lineHeight.xl}px;
`;
