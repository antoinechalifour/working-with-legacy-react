/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { App } from "../src/App";

describe("<App /> tests de caractérisation", function () {
  it("renders without crashing", () => {
    render(<App />);
  });
});
