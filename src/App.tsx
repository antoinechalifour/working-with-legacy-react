import * as React from "react";
import { addTodo, Todo, toggleTodo } from "./Todo";
import { AddTodoForm } from "./AddTodoForm";

interface AppState {
  todos: Todo[];
}

type AppProps = unknown;

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    todos: [],
  };

  constructor(props: AppProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <main>
        <ol>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.checked}
                onChange={() => this.toggleTodo(todo)}
              />{" "}
              <label htmlFor={todo.id}>{todo.title}</label>
            </li>
          ))}
        </ol>
        <AddTodoForm onNewTodo={this.handleSubmit} />
      </main>
    );
  }

  private handleSubmit(newTodoTitle: string) {
    this.setState({
      todos: addTodo(this.state.todos, newTodoTitle),
    });
  }

  private toggleTodo(toggledTodo: Todo) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === toggledTodo.id ? toggleTodo(toggledTodo) : todo
      ),
    });
  }
}
