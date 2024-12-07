import testingIds from "@/testing/testingIds";
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
import { CopyTextButton, ExternalLink } from "../_components";
import { strings } from "@/utils/constants";
import Image from "next/image";
import PenAndPaper from "@/public/images/calligraphy-pen-paper.jpeg";
import { showContactForm } from "@/utils/featureFlags";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Jacob Andes",
    description: "Contact Jacob Andes, software engineer based in the United States.",
};

const testIds = testingIds.pages.contact;
const { contactEmail, linkedInUrl, githubUrl } = strings;

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
                            text={contactEmail}
                            testId={testIds.copyContactInfoButton}
                        />
                        <SubHeaderStyled data-testid={testIds.linksHeader}>
                            On the web
                        </SubHeaderStyled>
                        <ExternalLinkContainerStyled
                            data-testid={testIds.externalLinkContainer}
                        >
                            <ExternalLink
                                href={linkedInUrl}
                                text="LinkedIn"
                                testId={testIds.externalLink}
                            />
                            <ExternalLink
                                href={githubUrl}
                                text="GitHub"
                                testId={testIds.externalLink}
                            />
                        </ExternalLinkContainerStyled>
                    </ContactInfoContainerStyled>
                    <ImageContainerStyled data-testid={testIds.imageContainer}>
                        <Image
                            src={PenAndPaper}
                            data-testid={testIds.image}
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                            alt="Calligraphy pen and pen lid on top of a notebook containing white pages and non-discernable black cursive writing on top of a dark-colored table."
                        />
                    </ImageContainerStyled>
                </>
            )}
        </ContactPageContainerStyled>
    );
}
