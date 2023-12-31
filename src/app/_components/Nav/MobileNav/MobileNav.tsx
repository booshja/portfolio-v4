import testingIds from "@/testing/testingIds";
import Link from "next/link";
import { Copyright } from "../../Copyright";

const testIds = testingIds.components.nav.mobileNav;

export const MobileNav = () => {
    return (
        <section data-testid="">
            <Link href="/" data-testid="">
                Jacob Andes - Software Engineer
            </Link>
            <nav data-testid="">
                <ul data-testid="">
                    <li data-testid="">
                        <Link href="/experience" data-testid="">
                            experience
                        </Link>
                    </li>
                    <li data-testid="">
                        <Link href="/about" data-testid="">
                            about/skills
                        </Link>
                    </li>
                    <li data-testid="">
                        <Link href="/contact" data-testid="">
                            contact
                        </Link>
                    </li>
                    <li data-testid="">
                        <Link href="/uses" data-testid="">
                            uses
                        </Link>
                    </li>
                    <li data-testid="">
                        <a href="https://importfrom.dev" data-testid="">
                            blog
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Socials here - horiztonal prop */}
            <Copyright />
        </section>
    );
};
