import { screen, render } from "@testing-library/react";
import NotFoundPage from "../not-found";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.notFound;

describe("NotFound Page", () => {
    it("should render the page correctly", () => {
        render(<NotFoundPage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.header)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.text)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.link)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
        expect(screen.getByAltText("A stack of different maps")).toBeInTheDocument();
    });
});
