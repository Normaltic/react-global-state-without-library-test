import { addTodo } from "@/store/todoStore";
import { useState } from "react";

function TodoForm() {
  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) setContent(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border"
        type="text"
        value={content}
        onChange={handleChange}
      />
      <button className="border border-l-0">Add</button>
    </form>
  );
}

export default TodoForm;
