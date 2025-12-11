"use client";

import Image from "next/image";

const EXTERNAL_LINK_SRC = "/icons/external-link.svg" as const;

import {
    ANavLinkStyled,
    ImageContainerStyled,
    NextNavLinkStyled,
} from "./NavLinkStyled";

interface NavLinkProps {
    href: string;
    text: string;
    testId: string;
    pathname?: string;
    external?: boolean;
}

export const NavLink = ({
    external = false,
    href,
    pathname,
    testId,
    text,
}: NavLinkProps) => {
    const activePath = pathname?.split("/")[1];
    const activeText = text.split("/")[0];
    const isActive = activePath === activeText;

    return external ? (
        <ANavLinkStyled data-testid={testId} href={href} target="_blank">
            {text}
            <ImageContainerStyled>
                <Image
                    alt="Link opens in external tab"
                    fill
                    sizes="24px"
                    src={EXTERNAL_LINK_SRC}
                    style={{ objectFit: "contain" }}
                />
            </ImageContainerStyled>
        </ANavLinkStyled>
    ) : (
        <NextNavLinkStyled $active={isActive} data-testid={testId} href={href}>
            {text}
        </NextNavLinkStyled>
    );
};
