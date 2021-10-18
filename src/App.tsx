import React from "react";

interface Todo {
  id: string;
  checked: boolean;
  title: string;
}

interface AppState {
  todos: Todo[];
  inputValue: string;
}

type AppProps = unknown;

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    inputValue: "",
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">Add a new todo</label>
          <input
            type="text"
            id="new-todo"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <button>Add</button>
        </form>
      </main>
    );
  }

  private handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now().toString(),
          checked: false,
          title: this.state.inputValue,
        },
      ],
      inputValue: "",
    });
  }

  private toggleTodo(toggledTodo: Todo) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === toggledTodo.id
          ? {
              ...toggledTodo,
              checked: !toggledTodo.checked,
            }
          : todo
      ),
    });
  }
}
