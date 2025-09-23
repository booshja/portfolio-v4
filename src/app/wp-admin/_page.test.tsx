import { screen, render } from "@testing-library/react";

import testingIds from "@/testing/testingIds";

import WPAdminPage from "./page";

const testIds = testingIds.pages.wpAdmin;

describe("WPAdmin Page", () => {
    it("should render the page correctly", () => {
        render(<WPAdminPage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
        expect(screen.getByAltText("Bugs Bunny saying no meme")).toBeInTheDocument();
    });
});
