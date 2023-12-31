import {
    FirstNameStyled,
    JobTitleStyled,
    LandingPageStyled,
    LastNameStyled,
    NameStyled,
} from "./LandingPageStyled";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.landing;

export default function LandingPage() {
    return (
        <LandingPageStyled data-testid={testIds.container}>
            <NameStyled data-testid={testIds.name}>
                <FirstNameStyled data-testid={testIds.firstName}>Jacob</FirstNameStyled>
                <LastNameStyled data-testid={testIds.lastName}>Andes</LastNameStyled>
            </NameStyled>
            <JobTitleStyled data-testid={testIds.jobTitle}>
                Software Engineer
            </JobTitleStyled>
        </LandingPageStyled>
    );
}
