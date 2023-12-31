import { renderServerComponent } from "@/lib/renderServerComponent";
import { screen } from "@testing-library/react";
import testingIds from "@/testing/testingIds";
import LandingPage from "./page";

const testIds = testingIds.pages.landing;

describe("Landing Page", () => {
    it("should correctly render the landing page", async () => {
        await renderServerComponent(<LandingPage />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.name)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.firstName)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.lastName)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.jobTitle)).toBeInTheDocument();
    });
});
