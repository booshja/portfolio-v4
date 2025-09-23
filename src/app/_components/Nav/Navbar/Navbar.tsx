"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import Mountain from "@/public/icons/mountain-dark.svg";
import testingIds from "@/testing/testingIds";
import { breakpoints, spacing, strings } from "@/utils/constants";

import { NavLink } from "../";
import { MobileNav } from "../MobileNav";
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
            <LogoStyled href="/" data-testid={testIds.logo}>
                Jacob Andes
            </LogoStyled>
            <NavSectionStyled data-testid={testIds.navSection}>
                <nav data-testid={testIds.nav}>
                    <NavListStyled data-testid={testIds.navList}>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/experience"
                                text="experience"
                                pathname={pathname}
                                testId={testIds.navLink}
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/about"
                                text="about/skills"
                                pathname={pathname}
                                testId={testIds.navLink}
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/contact"
                                text="contact"
                                pathname={pathname}
                                testId={testIds.navLink}
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href="/uses"
                                text="uses"
                                pathname={pathname}
                                testId={testIds.navLink}
                            />
                        </NavItemStyled>
                        <NavItemStyled data-testid={testIds.navItem}>
                            <NavLink
                                href={strings.blogUrl}
                                text="blog"
                                testId={testIds.navLink}
                                external
                            />
                        </NavItemStyled>
                    </NavListStyled>
                </nav>
                <MobileNavButton
                    onClick={handleMobileMenuChange}
                    data-testid={testIds.navButton}
                >
                    <Image
                        src={Mountain}
                        alt="Mountain that opens mobile menu"
                        fill
                        sizes={`(max-width: ${breakpoints.mobileLg}) ${spacing.lg}px, ${spacing.xl}px`}
                        style={{ aspectRatio: "1/1", objectFit: "contain" }}
                        data-testid={testIds.navButtonImage}
                    />
                </MobileNavButton>
            </NavSectionStyled>
            <MobileNav
                isOpen={isMobileMenuOpen}
                handleMenuClose={handleMobileMenuChange}
            />
        </NavbarStyled>
    );
};
