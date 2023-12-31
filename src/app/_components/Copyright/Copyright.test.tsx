import { render, screen } from "@testing-library/react";
import { Copyright } from "./";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.components.copyright;

describe("Copyright component", () => {
    it("should render the Copyright footer correctly", () => {
        render(<Copyright />);

        expect(screen.getByTestId(testIds.footer)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.text)).toBeInTheDocument();

        expect(screen.getByTestId(testIds.footer)).toHaveTextContent(
            "2020 - Present Jacob Andes. All Rights Reserved."
        );
    });
});
