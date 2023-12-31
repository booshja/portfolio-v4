import { render, screen } from "@testing-library/react";
import { ExternalLink } from "./ExternalLink";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.components.externalLink;

describe("ExternalLink component", () => {
    it("should render the component correctly", () => {
        render(<ExternalLink href="test" text="test" testId="test" />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByText("test")).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
    });
});
