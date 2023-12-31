import { screen, render } from "@testing-library/react";
import ContactPage from "./page";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.contact;

describe("Contact Page", () => {
    it("should render the page correctly", () => {
        render(<ContactPage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();

        expect(screen.getByTestId(testIds.header)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.headerFirstWord)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.headerSecondWord)).toBeInTheDocument();

        expect(screen.getByTestId(testIds.contactInfoContainer)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.contactInfoHeader)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.copyContactInfoButton)).toBeInTheDocument();

        expect(screen.getByTestId(testIds.linksHeader)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.externalLinkContainer)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.externalLink)).toHaveLength(2);
        expect(screen.getByText("LinkedIn")).toBeInTheDocument();
        expect(screen.getByText("GitHub")).toBeInTheDocument();

        expect(screen.getByTestId(testIds.imageContainer)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
    });
});
