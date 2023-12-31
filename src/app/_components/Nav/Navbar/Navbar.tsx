"use client";

import { usePathname } from "next/navigation";
import {
    LogoStyled,
    MobileNavButton,
    NavbarStyled,
    NavItemStyled,
    NavSectionStyled,
    NavListStyled,
} from "./NavbarStyled";
import { NavLink } from "../";
import Image from "next/image";
import Mountain from "@/public/icons/mountain-dark.svg";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.components.nav.navbar;

export const Navbar = () => {
    const pathname = usePathname();

    const handleMobileMenuOpen = () => {
        console.log("mobile menu open");
    };

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
                                href="https://importfrom.dev"
                                text="blog"
                                testId={testIds.navLink}
                                external
                            />
                        </NavItemStyled>
                    </NavListStyled>
                </nav>
                <MobileNavButton
                    onClick={handleMobileMenuOpen}
                    data-testid={testIds.navButton}
                >
                    <Image
                        src={Mountain}
                        alt="Mountain that opens mobile menu"
                        data-testid={testIds.navButtonImage}
                    />
                </MobileNavButton>
            </NavSectionStyled>
        </NavbarStyled>
    );
};
