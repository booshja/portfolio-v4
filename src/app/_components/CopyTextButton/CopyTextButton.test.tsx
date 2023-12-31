import { render, screen } from "@testing-library/react";
import { CopyTextButton } from "./CopyTextButton";

describe("CopyTextButton component", () => {
    it("should render the component correctly", () => {
        render(<CopyTextButton copyText="test" text="test" testId="test" />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
    });
});
