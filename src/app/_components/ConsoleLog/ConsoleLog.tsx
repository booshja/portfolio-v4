"use client";

import { getConsoleLog } from "./_utils";

export const ConsoleLog = () => {
    if (process.env.NODE_ENV === "development") {
        console.log("RUNNING IN DEVELOPMENT MODE");
    } else {
        console.log(getConsoleLog());
    }

    return <></>;
};
