import { screen, render } from "@testing-library/react";
import { NavLink } from "./";

describe("NavLink component", () => {
    it("should render the internal NavLink correctly", () => {
        render(<NavLink href="/test" text="test" testId="test" />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByTestId("test")).toHaveTextContent("test");
        expect(screen.getByTestId("test")).not.toHaveAttribute("target");
    });

    it("should render the external NavLink correctly", () => {
        render(<NavLink href="/test" text="test" testId="test" external />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByAltText("Link opens in external tab")).toBeInTheDocument();
        expect(screen.getByTestId("test")).toHaveTextContent("test");
        expect(screen.getByTestId("test")).toHaveAttribute("target", "_blank");
    });
});
