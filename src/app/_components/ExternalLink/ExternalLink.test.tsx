import { render, screen } from "@testing-library/react";

import testingIds from "@/testing/testingIds";

import { ExternalLink } from "./ExternalLink";

const testIds = testingIds.components.externalLink;

describe("ExternalLink component", () => {
    it("should render the component correctly", () => {
        render(<ExternalLink href="test" testId="test" text="test" />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByText("test")).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
    });
});
