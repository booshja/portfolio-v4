import type { Metadata } from "next";

import testingIds from "@/testing/testingIds";

import { ExternalLink } from "../_components/ExternalLink/ExternalLink";
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

export const metadata: Metadata = {
    description:
        "Uses page for Jacob Andes, software engineer based in the United States.",
    title: "Uses Page - Jacob Andes",
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
                    inline
                    testId={testIds.descriptionExternalLink}
                    text="Syntax.fm"
                />
                , and in following Wes Bos&apos;{" "}
                <ExternalLink
                    href="https://wesbos.com/uses"
                    inline
                    testId={testIds.descriptionExternalLink}
                    text="uses page"
                />
                , and his site{" "}
                <ExternalLink
                    href="https://uses.tech"
                    inline
                    testId={testIds.descriptionExternalLink}
                    text="uses.tech"
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
                        Cursor is my current daily driver editor, and VSCode for any
                        non-AI driven work.
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        For Java development I use IntelliJ IDEA Community Edition
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        In both editors, I use a custom theme based on Material Theme
                        Palenight
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
                        iTerm2 is my daily terminal, with a custom theme also based on
                        Material Theme Palenight
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        <ExternalLink
                            href="https://arc.net"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                            text="Arc"
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
                            inline
                            testId={testIds.softwareListItemExternalLink}
                            text="Josh W. Comeau's CSS Reset"
                        />
                    </p>
                </li>
                <li data-testid={testIds.softwareListItem}>
                    <p data-testid={testIds.softwareListItemParagraph}>
                        I use{" "}
                        <ExternalLink
                            href="https://www.raycast.com/"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                            text="Raycast"
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
                        which I attached an Autonomous &quot;Pro by Wistopht&quot;
                        SmartDesk Frame
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        My main monitor is a 32&quot; 4K Samsung - UJ59 Series
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        I additionally use a 24&quot; Samsung - T350 Series monitor that
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
                        I currently use a 2021 14&quot; MacBook Pro M1
                    </p>
                </li>
                <li data-testid={testIds.hardwareListItem}>
                    <p data-testid={testIds.hardwareListItemParagraph}>
                        My keyboard is a{" "}
                        <ExternalLink
                            href="https://www.zsa.io/voyager"
                            inline
                            testId={testIds.softwareListItemExternalLink}
                            text="ZSA Voyager"
                        />{" "}
                        with Lowprokb Ambients Twilight Silent Choc Low Profile Switches
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
                        For headphones I use Aipod Pros. Previously I used Sony
                        WH-1000XM4 Wireless Noise-Cancelling Headphones before getting
                        my ears gauged.
                    </p>
                </li>
            </HardwareListStyled>
        </UsesPageContainerStyled>
    );
}
