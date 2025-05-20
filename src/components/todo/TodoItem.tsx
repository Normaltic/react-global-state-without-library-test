export interface TodoItemProps {
  id: number;
  content: string;
  onRemove: (id: TodoItemProps["id"]) => void;
}

function TodoItem({ id, content, onRemove }: TodoItemProps) {
  return (
    <div className="border flex justify-between items-center px-6 py-2">
      <div>
        <h6 className="font-bold"># {id}</h6>
        <p>{content}</p>
      </div>
      <button type="button" onClick={() => onRemove(id)}>
        X
      </button>
    </div>
  );
}

export default TodoItem;
