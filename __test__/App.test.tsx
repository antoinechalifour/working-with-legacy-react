/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { App } from "../src/App";
import userEvent from "@testing-library/user-event";

describe("<App /> tests de caractérisation", function () {
  it("permet d'ajouter et de cocher des todos", () => {
    render(<App />);

    userEvent.type(screen.getByLabelText("Add a new todo"), "Buy bread");
    userEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(
      screen.getByRole("checkbox", { name: "Buy bread" })
    ).not.toBeChecked();

    userEvent.type(screen.getByLabelText("Add a new todo"), "Buy milk");
    userEvent.click(screen.getByRole("button", { name: "Add" }));
    expect(
      screen.getByRole("checkbox", { name: "Buy milk" })
    ).not.toBeChecked();

    userEvent.click(screen.getByRole("checkbox", { name: "Buy milk" }));
    expect(screen.getByRole("checkbox", { name: "Buy milk" })).toBeChecked();
  });
});
