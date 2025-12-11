import type { Metadata } from "next";
import Image from "next/image";

import PenAndPaper from "@/public/images/calligraphy-pen-paper.jpeg";
import testingIds from "@/testing/testingIds";
import { strings } from "@/utils/constants";
import { showContactForm } from "@/utils/featureFlags/CONTACT_FORM";

import { CopyTextButton } from "../_components/CopyTextButton/CopyTextButton";
import { ExternalLink } from "../_components/ExternalLink/ExternalLink";
import {
    ContactPageContainerStyled,
    ContactInfoContainerStyled,
    ExternalLinkContainerStyled,
    ImageContainerStyled,
    PageHeaderFirstSpanStyled,
    PageHeaderSecondSpanStyled,
    PageHeaderStyled,
    SubHeaderStyled,
} from "./_pageStyled";

export const metadata: Metadata = {
    description: "Contact Jacob Andes, software engineer based in the United States.",
    title: "Contact - Jacob Andes",
};

const testIds = testingIds.pages.contact;
const { contactEmail, githubUrl, linkedInUrl } = strings;

export default async function Contact() {
    // * Find edge config feature flag url in .env.local
    const shouldShowContactForm = await showContactForm();

    return (
        <ContactPageContainerStyled data-testid={testIds.container}>
            {shouldShowContactForm ? (
                <>
                    <p>Feature flag is on!</p>
                </>
            ) : (
                <>
                    <PageHeaderStyled data-testid={testIds.header}>
                        <PageHeaderFirstSpanStyled
                            data-testid={testIds.headerFirstWord}
                        >
                            Let&apos;s
                        </PageHeaderFirstSpanStyled>
                        <PageHeaderSecondSpanStyled
                            data-testid={testIds.headerSecondWord}
                        >
                            Connect
                        </PageHeaderSecondSpanStyled>
                    </PageHeaderStyled>
                    <ContactInfoContainerStyled
                        data-testid={testIds.contactInfoContainer}
                    >
                        <SubHeaderStyled data-testid={testIds.contactInfoHeader}>
                            Contact
                        </SubHeaderStyled>
                        <CopyTextButton
                            copyText={contactEmail}
                            testId={testIds.copyContactInfoButton}
                            text={contactEmail}
                        />
                        <SubHeaderStyled data-testid={testIds.linksHeader}>
                            On the web
                        </SubHeaderStyled>
                        <ExternalLinkContainerStyled
                            data-testid={testIds.externalLinkContainer}
                        >
                            <ExternalLink
                                href={linkedInUrl}
                                testId={testIds.externalLink}
                                text="LinkedIn"
                            />
                            <ExternalLink
                                href={githubUrl}
                                testId={testIds.externalLink}
                                text="GitHub"
                            />
                        </ExternalLinkContainerStyled>
                    </ContactInfoContainerStyled>
                    <ImageContainerStyled data-testid={testIds.imageContainer}>
                        <Image
                            alt="Calligraphy pen and pen lid on top of a notebook containing white pages and non-discernable black cursive writing on top of a dark-colored table."
                            data-testid={testIds.image}
                            fill
                            priority
                            src={PenAndPaper}
                            style={{ objectFit: "contain" }}
                        />
                    </ImageContainerStyled>
                </>
            )}
        </ContactPageContainerStyled>
    );
}
