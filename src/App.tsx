import * as React from "react";
import { addTodo, Todo, toggleTodo } from "./Todo";
import { AddTodoForm } from "./AddTodoForm";
import { TodoItem } from "./TodoItem";

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
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  render() {
    return (
      <main>
        <ol>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem todo={todo} onToggled={this.toggleTodo} />
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

  private toggleTodo(todoId: string) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === todoId ? toggleTodo(todo) : todo
      ),
    });
  }
}
