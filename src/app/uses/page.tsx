import testingIds from "@/testing/testingIds";
import { ExternalLink } from "../_components";
import {
    HardwareListStyled,
    HardwareSectionHeaderStyled,
    PageDescriptionStyled,
    PageHeaderStyled,
    SoftwareListStyled,
    SoftwareSectionHeaderFirstWordStyled,
    SoftwareSectionHeaderSecondWordStyled,
    SoftwareSectionHeaderStyled,
    SoftwareSectionHeaderThirdWordStyled,
    UsesPageContainerStyled,
} from "./_pageStyled";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Uses Page - Jacob Andes",
    description:
        "Uses page for Jacob Andes, software engineer based in the United States.",
};

const testIds = testingIds.pages.uses;

export default function Uses() {
    return (
        <UsesPageContainerStyled data-testid={testIds.container}>
            <PageHeaderStyled data-testid={testIds.pageHeader}>Uses</PageHeaderStyled>
            <PageDescriptionStyled data-testid={testIds.description}>
                I&apos;m a fan of{" "}
                <ExternalLink
                    href="https://syntax.fm"
                    text="Syntax.fm"
                    inline
                    testId={testIds.descriptionExternalLink}
                />
                , and in following Wes Bos&apos;{" "}
                <ExternalLink
                    href="https://wesbos.com/uses"
                    text="uses page"
                    inline
                    testId={testIds.descriptionExternalLink}
                />
                , and his site{" "}
                <ExternalLink
                    href="https://uses.tech"
                    text="uses.tech"
                    inline
                    testId={testIds.descriptionExternalLink}
                />
                , this is my own uses page!
            </PageDescriptionStyled>
            <SoftwareSectionHeaderStyled data-testid={testIds.softwareSectionHeader}>
                <SoftwareSectionHeaderFirstWordStyled
                    data-testid={testIds.softwareSectionHeaderSpan}
                >
                    Editor +
                </SoftwareSectionHeaderFirstWordStyled>
                <SoftwareSectionHeaderSecondWordStyled
                    data-testid={testIds.softwareSectionHeaderSpan}
                >
                    Terminal +
                </SoftwareSectionHeaderSecondWordStyled>
                <SoftwareSectionHeaderThirdWordStyled
                    data-testid={testIds.softwareSectionHeaderSpan}
                >
                    Desktop Apps
                </SoftwareSectionHeaderThirdWordStyled>
            </SoftwareSectionHeaderStyled>
            <SoftwareListStyled data-testid={testIds.softwareList}>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        For anything non-Java, Visual Studio Code is my current editor,
                        along with a slew of extensions including GitHub CoPilot
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        For Java development I use IntelliJ IDEA Community Edition
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        In both editors, I use Material Theme Palenight for my theme
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        I&apos;m currently using Fira Code for my font in both my
                        editors as well as my terminal
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        <ExternalLink
                            href="https://www.warp.dev"
                            text="Warp"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                        />{" "}
                        is my daily terminal, with iterm for the theme
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        <ExternalLink
                            href="https://arc.net"
                            text="Arc"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                        />{" "}
                        is my daily browser, however I also use Chrome, Firefox and
                        Safari for testing
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        I&apos;ve used a variety of different rules and setting for
                        ESLint, Prettier, and tsconfig, so I don&apos;t have a
                        particular set of settings for these as they&apos;ve been
                        continually evolving
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        I use{" "}
                        <ExternalLink
                            href="https://www.joshwcomeau.com/css/custom-css-reset/"
                            text="Josh W. Comeau's CSS Reset"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                        />
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        I use{" "}
                        <ExternalLink
                            href="https://www.raycast.com/"
                            text="Raycast"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                        />{" "}
                        for searching, window management, and custom workflows on my
                        machine
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        I design in Figma
                    </p>
                </li>
            </SoftwareListStyled>
            <HardwareSectionHeaderStyled data-testid={testIds.hardwareSectionHeader}>
                Desk Setup
            </HardwareSectionHeaderStyled>
            <HardwareListStyled data-testid={testIds.hardwareList}>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        I have a butcher block countertop I found at Lowe&apos;s to
                        which I attached an Autonomous "Pro by Wistopht" SmartDesk Frame
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        My main monitor is a 32" 4K Samsung - UJ59 Series
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        I additionally use a 24" Samsung - T350 Series monitor that
                        I&apos;ve rotated vertical
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        For video calls, I use a Logitech - C920s Pro 1080 Webcam
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        My chair is a Herman Miller Aeron Size C
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        I have a Dpforest 2.5Hp Walking Pad Treadmill that I use under
                        my desk to walk as I work to keep moving!
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        I currently use a 2021 14" MacBook Pro M1
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        My keyboard is a{" "}
                        <ExternalLink
                            href="https://www.zsa.io/voyager"
                            text="ZSA Voyager"
                            testId={testIds.softwareListItemExternalLink}
                            inline
                        />{" "}
                        with Kailh Low Profile Choc Red Switches
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        My mouse is a Logitech MX Master 3S for Mac
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        For comfort, I use Aelfox Memory Foam Wrist Wrest & Gaming Mouse
                        Pad with Wrist Support
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        For headphones I use Sony WH-1000XM4 Wireless Noise-Cancelling
                        Headphones
                    </p>
                </li>
            </HardwareListStyled>
        </UsesPageContainerStyled>
    );
}
