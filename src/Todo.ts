export interface Todo {
  id: string;
  checked: boolean;
  title: string;
}

const makeTodo = (title: string) => ({
  id: Date.now().toString(),
  checked: false,
  title,
});

export const addTodo = (todos: Todo[], newTodoTitle: string) => [
  ...todos,
  makeTodo(newTodoTitle),
];

export const toggleTodo = (toggledTodo: Todo) => ({
  ...toggledTodo,
  checked: !toggledTodo.checked,
});
