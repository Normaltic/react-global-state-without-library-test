import createStore from "@/utils/createStore";

interface TodoItem {
  id: number;
  content: string;
}

interface TodoStore {
  todos: TodoItem[];
}

let id = 0;

export const initialTodoStore: TodoStore = {
  todos: []
};

export const { getSnapshot, setSnapshot, subscribe } =
  createStore(initialTodoStore);

export function addTodo(todo: TodoItem["content"]) {
  const store = getSnapshot();
  id += 1;
  const nextId = id;
  setSnapshot({
    todos: [...store.todos, { id: nextId, content: todo }]
  });
}

export function removeTodo(id: TodoItem["id"]) {
  const store = getSnapshot();
  const filtered = store.todos.filter((todo) => todo.id !== id);
  setSnapshot({
    todos: [...filtered]
  });
}
