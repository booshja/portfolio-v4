import { render, screen } from "@testing-library/react";

import testingIds from "@/testing/testingIds";

import { MobileExternalNavLink } from "./MobileExternalNavLink";

const testIds = testingIds.components.mobileExternalNavLink;

describe("ExternalLink component", () => {
    it("should render the component correctly", () => {
        render(<MobileExternalNavLink href="test" text="test" testId="test" />);

        expect(screen.getByTestId("test")).toBeInTheDocument();
        expect(screen.getByText("test")).toBeInTheDocument();
        expect(screen.getByTestId(testIds.image)).toBeInTheDocument();
    });
});
