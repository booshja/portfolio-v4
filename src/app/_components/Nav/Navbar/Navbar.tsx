"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const MOUNTAIN_SRC = "/icons/mountain-dark.svg" as const;
import testingIds from "@/testing/testingIds";
import { breakpoints, spacing, strings } from "@/utils/constants";

import { MobileNav } from "../MobileNav/MobileNav";
import { NavLink } from "../NavLink/NavLink";
import {
    LogoStyled,
    MobileNavButton,
    NavbarStyled,
    NavItemStyled,
    NavSectionStyled,
    NavListStyled,
} from "./NavbarStyled";

const testIds = testingIds.components.nav.navbar;

export const Navbar = () => {
    const pathname = usePathname();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleMobileMenuChange = () => {
        setIsMobileMenuOpen((isOpen) => !isOpen);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <NavbarStyled data-testid={testIds.container}>
            <LogoStyled data-testid={testIds.logo} href="/">
                Jacob Andes
            </LogoStyled>
            <NavSectionStyled data-testid={testIds.navSection}>
                <nav data-testid={testIds.nav}>
                    <NavListStyled data-testid={testIds.navList}>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/experience"
                                pathname={pathname}
                                testId={testIds.navLink}
                                text="experience"
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/about"
                                pathname={pathname}
                                testId={testIds.navLink}
                                text="about/skills"
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/contact"
                                pathname={pathname}
                                testId={testIds.navLink}
                                text="contact"
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/uses"
                                pathname={pathname}
                                testId={testIds.navLink}
                                text="uses"
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                external
                                href={strings.blogUrl}
                                testId={testIds.navLink}
                                text="blog"
                            />
                        </NavItemStyled>
                    </NavListStyled>
                </nav>
                <MobileNavButton
                    data-testid={testIds.navButton}
                    onClick={handleMobileMenuChange}
                >
                    <Image
                        alt="Mountain that opens mobile menu"
                        data-testid={testIds.navButtonImage}
                        fill
                        sizes={`(max-width: ${breakpoints.mobileLg}) ${spacing.lg}px, ${spacing.xl}px`}
                        src={MOUNTAIN_SRC}
                        style={{ aspectRatio: "1/1", objectFit: "contain" }}
                    />
                </MobileNavButton>
            </NavSectionStyled>
            <MobileNav
                handleMenuClose={handleMobileMenuChange}
                isOpen={isMobileMenuOpen}
            />
        </NavbarStyled>
    );
};
