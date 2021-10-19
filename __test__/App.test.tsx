/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { App } from "../src/App";
import userEvent from "@testing-library/user-event";

describe("<App /> tests de caractérisation", function () {
  let app: AppPageObject;

  beforeEach(() => (app = new AppPageObject()));

  it("permet d'ajouter des todos", () => {
    app
      .givenAnEmptyTodoList()
      .whenNewTodosAreAdded("Buy bread", "Buy milk")
      .thenTheyAppearUnchecked("Buy bread", "Buy milk");
  });

  it("permet de cocher des todos", () => {
    app
      .givenATodoList("Buy bread", "Buy milk")
      .whenTodoIsToggled("Buy milk")
      .thenTheyAppearChecked("Buy milk");
  });
});

class AppPageObject {
  givenAnEmptyTodoList() {
    render(<App />);

    return this;
  }

  givenATodoList(...todos: string[]) {
    render(<App />);

    this.whenNewTodosAreAdded(...todos);

    return this;
  }

  whenNewTodosAreAdded(...todos: string[]) {
    todos.forEach((todo) => {
      userEvent.type(screen.getByLabelText("Add a new todo"), todo);
      userEvent.click(screen.getByRole("button", { name: "Add" }));
    });

    return this;
  }
  whenTodoIsToggled(...todos: string[]) {
    todos.forEach((todo) =>
      userEvent.click(screen.getByRole("checkbox", { name: todo }))
    );

    return this;
  }

  thenTheyAppearUnchecked(...todos: string[]) {
    todos.forEach((todo) =>
      expect(screen.getByRole("checkbox", { name: todo })).not.toBeChecked()
    );

    return this;
  }

  thenTheyAppearChecked(...todos: string[]) {
    todos.forEach((todo) =>
      expect(screen.getByRole("checkbox", { name: todo })).toBeChecked()
    );

    return this;
  }
}
