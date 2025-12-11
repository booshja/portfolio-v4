"use client";

import testingIds from "@/testing/testingIds";
import { strings } from "@/utils/constants";

import { Copyright } from "../../Copyright/Copyright";
import { Socials } from "../../Socials/Socials";
import { MobileExternalNavLink } from "../MobileExternalNavLink/MobileExternalNavLink";
import {
    ClosingButtonStyled,
    ContainerStyled,
    LogoStyled,
    NavItemStyled,
    NavLinkStyled,
    NavListStyled,
} from "./MobileNavStyled";

interface MobileNavProps {
    isOpen: boolean;
    handleMenuClose: () => void;
}

const testIds = testingIds.components.nav.mobileNav;

export const MobileNav = ({ handleMenuClose, isOpen }: MobileNavProps) => (
    <ContainerStyled $isOpen={isOpen} data-testid={testIds.container}>
        <ClosingButtonStyled
            data-testid={testIds.closingButton}
            onClick={handleMenuClose}
        >
            X
        </ClosingButtonStyled>
        <LogoStyled data-testid={testIds.logo} href="/">
            Jacob Andes - Software Engineer
        </LogoStyled>
        <nav data-testid={testIds.nav}>
            <NavListStyled data-testid={testIds.navList}>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled data-testid={testIds.navLink} href="/experience">
                        experience
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled data-testid={testIds.navLink} href="/about">
                        about/skills
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled data-testid={testIds.navLink} href="/contact">
                        contact
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <NavLinkStyled data-testid={testIds.navLink} href="/uses">
                        uses
                    </NavLinkStyled>
                </NavItemStyled>
                <NavItemStyled data-testid={testIds.navItem}>
                    <MobileExternalNavLink
                        href={strings.blogUrl}
                        testId={testIds.navLink}
                        text="blog"
                    />
                </NavItemStyled>
            </NavListStyled>
        </nav>
        <Socials horizontal />
        <Copyright />
    </ContainerStyled>
);
