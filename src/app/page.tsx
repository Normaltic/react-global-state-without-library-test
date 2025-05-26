import Counter from "@/components/counter/Counter";
import ObjectViewer from "@/components/object/ObjectViewer";
import ObjectImmerViewer from "@/components/objectImmer/ObjectViewer";
import ObjectChangerViewer from "@/components/objectChanger/ObjectViewer";
import Record from "@/components/record/Record";
import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <div>
      <main>
        <Counter />
        <Record />
        <TodoList />
        <ObjectViewer />
        <ObjectImmerViewer />
        <ObjectChangerViewer />
      </main>
    </div>
  );
}
