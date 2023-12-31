import { render, screen } from "@testing-library/react";
import AboutPage from "./page";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.about;

describe("About Page", () => {
    it("should render the About page correctly", () => {
        render(<AboutPage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.header)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.headerSpan)).toHaveLength(2);
        expect(screen.getByTestId(testIds.content)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.textContainer)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.greetingHeader)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.greetingText)).toHaveLength(2);
        expect(screen.getByTestId(testIds.skillsHeader)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.skillUsageHeader)).toHaveLength(3);
        expect(screen.getAllByTestId(testIds.skillList)).toHaveLength(3);
        expect(screen.getAllByTestId(testIds.skillListItem)).toHaveLength(46);
        expect(screen.getAllByTestId(testIds.skillListItemText)).toHaveLength(46);
    });
});
