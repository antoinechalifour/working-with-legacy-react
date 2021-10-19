import * as React from "react";
import { addTodo, Todo, toggleTodo } from "./Todo";
import { AddTodoForm } from "./AddTodoForm";
import { TodoItem } from "./TodoItem";

export const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleSubmit = (newTodoTitle: string) =>
    setTodos(addTodo(todos, newTodoTitle));

  const toggle = (todoId: string) =>
    setTodos(
      todos.map((todo) => (todo.id === todoId ? toggleTodo(todo) : todo))
    );

  return (
    <main>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} onToggled={toggle} />
          </li>
        ))}
      </ol>
      <AddTodoForm onNewTodo={handleSubmit} />
    </main>
  );
};
