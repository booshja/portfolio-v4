import { render, screen } from "@testing-library/react";
import ExperiencePage from "./page";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.experience;

describe("Experience Page", () => {
    it("should render the page correctly", () => {
        render(<ExperiencePage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.header)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.header)).toHaveTextContent("Experience");
        expect(
            screen.getAllByTestId(testingIds.components.projectCard.container)
        ).toHaveLength(6);
    });
});
