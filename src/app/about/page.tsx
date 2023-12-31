import testingIds from "@/testing/testingIds";
import skills from "./_skills";
import Image from "next/image";
import {
    AboutPageContainerStyled,
    ContentStyled,
    HeaderStyled,
    HeaderFirstWordStyled,
    HeaderSecondWordStyled,
    ImageContainerStyled,
    GreetingHeaderStyled,
    GreetingTextStyled,
    SkillListStyled,
    SkillsHeaderStyled,
    SkillUsageHeaderStyled,
    TextContainerStyled,
} from "./_pageStyled";

const testIds = testingIds.pages.about;

export default function About() {
    return (
        <AboutPageContainerStyled data-testid={testIds.container}>
            <HeaderStyled data-testid={testIds.header}>
                <HeaderFirstWordStyled data-testid={testIds.headerSpan}>
                    About/
                </HeaderFirstWordStyled>
                <HeaderSecondWordStyled data-testid={testIds.headerSpan}>
                    Skills
                </HeaderSecondWordStyled>
            </HeaderStyled>
            <ContentStyled>
                <TextContainerStyled data-testid={testIds.textContainer}>
                    <GreetingHeaderStyled data-testid={testIds.greetingHeader}>
                        Hello!
                    </GreetingHeaderStyled>
                    <GreetingTextStyled data-testid={testIds.greetingText}>
                        I&apos;m Jacob, a software engineer with experience across the
                        stack, and a passion for Front End development. I love finding
                        creative solutions to complex problems and creating beautiful,
                        reliable, and responsive web applications.
                    </GreetingTextStyled>
                    <GreetingTextStyled data-testid={testIds.greetingText}>
                        When I&apos;m not coding, you can find me spending time with my
                        dogs, listening to music, going to see concerts, reading, taking
                        care of my plants and bonsai, watching hockey, or clumsily
                        playing hockey in the Kraken Adult Hockey League.
                    </GreetingTextStyled>
                    <SkillsHeaderStyled data-testid={testIds.skillsHeader}>
                        Skills
                    </SkillsHeaderStyled>
                    <SkillUsageHeaderStyled data-testid={testIds.skillUsageHeader}>
                        Daily Usage
                    </SkillUsageHeaderStyled>
                    <SkillListStyled data-testid={testIds.skillList}>
                        {skills.dailyUsage.map(({ skill, id }) => (
                            <li key={id} data-testid={testIds.skillListItem}>
                                <p data-testid={testIds.skillListItemText}>{skill}</p>
                            </li>
                        ))}
                    </SkillListStyled>
                    <SkillUsageHeaderStyled data-testid={testIds.skillUsageHeader}>
                        Worked With
                    </SkillUsageHeaderStyled>
                    <SkillListStyled data-testid={testIds.skillList}>
                        {skills.workedWith.map(({ skill, id }) => (
                            <li key={id} data-testid={testIds.skillListItem}>
                                <p data-testid={testIds.skillListItemText}>{skill}</p>
                            </li>
                        ))}
                    </SkillListStyled>
                    <SkillUsageHeaderStyled data-testid={testIds.skillUsageHeader}>
                        Experimented With
                    </SkillUsageHeaderStyled>
                    <SkillListStyled data-testid={testIds.skillList}>
                        {skills.experimentedWith.map(({ skill, id }) => (
                            <li key={id} data-testid={testIds.skillListItem}>
                                <p data-testid={testIds.skillListItemText}>{skill}</p>
                            </li>
                        ))}
                    </SkillListStyled>
                </TextContainerStyled>
                <ImageContainerStyled data-testid={testIds.imageContainer}>
                    <Image
                        src=""
                        alt="Jacob Andes"
                        priority
                        style={{ objectFit: "contain", width: "auto", height: "auto" }}
                        data-testid={testIds.image}
                    />
                </ImageContainerStyled>
            </ContentStyled>
        </AboutPageContainerStyled>
    );
}
