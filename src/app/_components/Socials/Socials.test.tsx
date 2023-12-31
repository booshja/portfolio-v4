import { render, screen } from "@testing-library/react";
import { Socials } from "./";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.components.socials;

describe("Socials Component", () => {
    it("renders the Socials component correctly", () => {
        render(<Socials />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.text)).toBeInTheDocument();
        expect(screen.getByText("find me")).toBeInTheDocument();
        expect(screen.getByTestId(testIds.divider)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.link)).toHaveLength(2);
        expect(screen.getAllByTestId(testIds.icon)).toHaveLength(2);
    });
});
