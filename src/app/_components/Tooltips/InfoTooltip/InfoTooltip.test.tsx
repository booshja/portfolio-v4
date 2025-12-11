import { screen, render, waitFor } from "@testing-library/react";

import testingIds from "@/testing/testingIds";

import { InfoTooltip } from "./InfoTooltip";

const testIds = testingIds.components.tooltip;

describe("InfoTooltip Component", () => {
    it("renders the InfoTooltip component correctly", async () => {
        render(<InfoTooltip isOpen={true} setIsOpen={() => {}} text="test" />);

        await waitFor(() => {
            expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        });
    });

    it("calls the setIsOpen function after 1750ms", async () => {
        const setIsOpen = jest.fn();
        render(<InfoTooltip isOpen={true} setIsOpen={setIsOpen} text="test" />);
        await new Promise((r) => setTimeout(r, 1751));
        expect(setIsOpen).toHaveBeenCalled();
    });
});
