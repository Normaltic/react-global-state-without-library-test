"use client";
import useTodoStore from "@/hooks/useTodoStore";
import { removeTodo } from "@/store/todoStore";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodoStore();

  return (
    <div className="p-4 border w-[25rem]">
      <TodoForm />
      {!!todos.length && (
        <div className="mt-2 flex flex-col gap-2">
          {todos.map(({ id, content }) => (
            <TodoItem
              key={id}
              id={id}
              content={content}
              onRemove={removeTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
