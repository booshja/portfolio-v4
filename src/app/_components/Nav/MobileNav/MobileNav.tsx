"use client";

import testingIds from "@/testing/testingIds";
import { Copyright } from "../../Copyright";
import { Socials } from "../../Socials";
import {
    ClosingButtonStyled,
    ContainerStyled,
    LogoStyled,
    NavItemStyled,
    NavLinkStyled,
    NavListStyled,
} from "./MobileNavStyled";
import { ExternalLink } from "../..";
import { strings } from "@/utils/constants";

interface MobileNavProps {
    isOpen: boolean;
    handleMenuClose: () => void;
}

const testIds = testingIds.components.nav.mobileNav;

export const MobileNav = ({ isOpen, handleMenuClose }: MobileNavProps) => (
    <ContainerStyled $isOpen={isOpen} data-testid={testIds.container}>
        <ClosingButtonStyled
            onClick={handleMenuClose}
            data-testid={testIds.closingButton}
        >
            X
        </ClosingButtonStyled>
        <LogoStyled href="/" data-testid={testIds.logo}>
            Jacob Andes - Software Engineer
        </LogoStyled>
        <nav data-testid={testIds.nav}>
            <NavListStyled data-testid={testIds.navList}>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled href="/experience" data-testid={testIds.navLink}>
                        experience
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled href="/about" data-testid={testIds.navLink}>
                        about/skills
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled href="/contact" data-testid={testIds.navLink}>
                        contact
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled href="/uses" data-testid={testIds.navLink}>
                        uses
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <ExternalLink
                        href={strings.blogUrl}
                        text="blog"
                        mobileNav
                        testId={testIds.navLink}
                    />
                </NavItemStyled>
            </NavListStyled>
        </nav>
        <Socials horizontal />
        <Copyright />
    </ContainerStyled>
);
