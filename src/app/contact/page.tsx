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
import ContactImage from "@/public/images/calligraphy-pen-paper.jpeg";

const testIds = testingIds.pages.contact;
const { contactEmail, linkedInUrl, githubUrl } = strings;

export default function Contact() {
    return (
        <ContactPageContainerStyled data-testid={testIds.container}>
            <PageHeaderStyled data-testid={testIds.header}>
                <PageHeaderFirstSpanStyled data-testid={testIds.headerFirstWord}>
                    Let&apos;s
                </PageHeaderFirstSpanStyled>
                <PageHeaderSecondSpanStyled data-testid={testIds.headerSecondWord}>
                    Connect
                </PageHeaderSecondSpanStyled>
            </PageHeaderStyled>
            <ContactInfoContainerStyled data-testid={testIds.contactInfoContainer}>
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
                    src={ContactImage}
                    data-testid={testIds.image}
                    style={{ objectFit: "contain" }}
                    fill
                    priority
                    alt="Calligraphy pen and pen lid on top of a notebook containing white pages and non-discernable black cursive writing on top of a dark-colored table."
                />
            </ImageContainerStyled>
        </ContactPageContainerStyled>
    );
}
