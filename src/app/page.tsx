import Counter from "@/components/counter/Counter";
import EnvViewer from "@/components/env/EnvViewer";
import EnvImmerViewer from "@/components/envImmer/EnvViewer";
import EnvChangerViewer from "@/components/envChanger/EnvViewer";
import Record from "@/components/record/Record";
import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <div>
      <main>
        <Counter />
        <Record />
        <TodoList />
        <EnvViewer />
        <EnvImmerViewer />
        <EnvChangerViewer />
      </main>
    </div>
  );
}
