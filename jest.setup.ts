import "@testing-library/jest-dom";
import "jest-styled-components";
import { randomUUID } from "node:crypto";
window.crypto.randomUUID = randomUUID;
