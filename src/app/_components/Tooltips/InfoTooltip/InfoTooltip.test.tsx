import { screen, render, waitFor } from "@testing-library/react";
import { InfoTooltip } from "./";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.components.tooltip;

describe("InfoTooltip Component", () => {
    it("renders the InfoTooltip component correctly", async () => {
        render(<InfoTooltip text="test" isOpen={true} setIsOpen={() => {}} />);

        await waitFor(() => {
            expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        });
    });

    it("calls the setIsOpen function after 1750ms", async () => {
        const setIsOpen = jest.fn();
        render(<InfoTooltip text="test" isOpen={true} setIsOpen={setIsOpen} />);
        await new Promise((r) => setTimeout(r, 1751));
        expect(setIsOpen).toHaveBeenCalled();
    });
});
