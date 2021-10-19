/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { App } from "../src/App";
import userEvent from "@testing-library/user-event";

describe("<App /> tests de caractérisation", function () {
  it("renders without crashing", () => {
    render(<App />);

    userEvent.type(screen.getByLabelText("Add a new todo"), "Buy bread");
    userEvent.click(screen.getByRole("button", { name: "Add" }));
  });
});
