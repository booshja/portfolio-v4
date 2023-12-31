"use client";

import { ANavLinkStyled, NextNavLinkStyled } from "./NavLinkStyled";
import ExternalLink from "@/public/icons/external-link.svg";
import Image from "next/image";

interface NavLinkProps {
    href: string;
    text: string;
    testId: string;
    pathname?: string;
    external?: boolean;
}

export const NavLink = ({
    href,
    text,
    testId,
    pathname,
    external = false,
}: NavLinkProps) => {
    const activePath = pathname?.split("/")[1];
    const activeText = text.split("/")[0];
    const isActive = activePath === activeText ? "true" : "false";

    return external ? (
        <ANavLinkStyled href={href} target="_blank" data-testid={testId}>
            {text}
            <Image
                src={ExternalLink}
                alt="Link opens in external tab"
                style={{ objectFit: "contain", width: "auto", height: "auto" }}
            />
        </ANavLinkStyled>
    ) : (
        <NextNavLinkStyled href={href} active={isActive} data-testid={testId}>
            {text}
        </NextNavLinkStyled>
    );
};
