import { render } from "@testing-library/react";

import { ConsoleLog } from "./ConsoleLog";

describe("ConsoleLog Component", () => {
    it("console.logs the text", () => {
        const logSpy = jest.spyOn(console, "log");

        render(<ConsoleLog />);

        expect(logSpy).toHaveBeenCalled();
    });
});
