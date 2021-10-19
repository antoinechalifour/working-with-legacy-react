import { Todo } from "./Todo";

interface TodoItemProps {
  todo: Todo;
  onToggled: (id: string) => void;
}

export const TodoItem = ({ onToggled, todo }: TodoItemProps) => (
  <>
    <input
      type="checkbox"
      id={todo.id}
      checked={todo.checked}
      onChange={() => onToggled(todo.id)}
    />{" "}
    <label htmlFor={todo.id}>{todo.title}</label>
  </>
);
