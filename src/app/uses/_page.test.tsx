import { screen, render } from "@testing-library/react";
import UsesPage from "./page";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.uses;

describe("Uses Page", () => {
    it("should render the page correctly", () => {
        render(<UsesPage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();

        expect(screen.getByTestId(testIds.pageHeader)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.pageHeader)).toHaveTextContent("Uses");
        expect(screen.getByTestId(testIds.description)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.descriptionExternalLink)).toHaveLength(3);

        expect(screen.getByTestId(testIds.softwareSectionHeader)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.softwareSectionHeaderSpan)).toHaveLength(
            3
        );

        expect(screen.getByTestId(testIds.softwareList)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.softwareListItem)).toHaveLength(10);
        expect(screen.getAllByTestId(testIds.softwareListItemParagraph)).toHaveLength(
            10
        );
        expect(
            screen.getAllByTestId(testIds.softwareListItemExternalLink)
        ).toHaveLength(3);

        expect(screen.getByTestId(testIds.hardwareSectionHeader)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.hardwareList)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.hardwareListItem)).toHaveLength(11);
        expect(screen.getAllByTestId(testIds.hardwareListItemParagraph)).toHaveLength(
            11
        );
    });
});
