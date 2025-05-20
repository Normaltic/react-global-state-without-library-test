import Counter from "@/components/counter/Counter";
import Record from "@/components/record/Record";
import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <div>
      <main>
        <Counter />
        <Record />
        <TodoList />
      </main>
    </div>
  );
}
