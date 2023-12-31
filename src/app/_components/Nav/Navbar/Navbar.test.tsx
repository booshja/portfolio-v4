import { screen, render } from "@testing-library/react";
import { Navbar } from "./";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.components.nav.navbar;

describe("Navbar component", () => {
    it("should render the Navbar correctly: mobile small size", () => {
        render(<Navbar />);

        expect(screen.getByTestId(testIds.container)).toBeInTheDocument();

        expect(screen.getByTestId(testIds.logo)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.logo)).toHaveTextContent("Jacob Andes");

        expect(screen.getByTestId(testIds.navSection)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.nav)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.navList)).toBeInTheDocument();
        expect(screen.getAllByTestId(testIds.navItem)).toHaveLength(5);
        expect(screen.getAllByTestId(testIds.navLink)).toHaveLength(5);

        expect(screen.getByTestId(testIds.navButton)).toBeInTheDocument();
        expect(screen.getByTestId(testIds.navButtonImage)).toBeInTheDocument();
    });
});
