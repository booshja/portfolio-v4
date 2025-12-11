import { render, screen } from "@testing-library/react";

import testingIds from "@/testing/testingIds";

import { MobileNav } from "./MobileNav";

const testIds = testingIds.components.nav.mobileNav;

describe("MobileNav component", () => {
    it("renders the MobileNav component correctly", () => {
        render(<MobileNav handleMenuClose={() => undefined} isOpen />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.closingButton)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.logo)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.nav)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.navList)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.navItem)).toHaveLength(5);
        expect(screen.getAllByTestId(testIds.navLink)).toHaveLength(5);
    });
});
