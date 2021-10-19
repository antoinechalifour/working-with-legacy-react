import { useState } from "react";

interface AddTodoFormProps {
  onNewTodo: (newTodoTitle: string) => void;
}

export const AddTodoForm = ({ onNewTodo }: AddTodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Add a new todo</label>
      <input
        type="text"
        id="new-todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
