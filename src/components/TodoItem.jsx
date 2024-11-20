import React from "react";
import Trash from "./Trash";

export default function TodoItem({ todo, onCheck, onDelete }) {
  return (
    <div className="rounded-lg p-5 flex align-middle content-center bg-white shadow-md justify-between py-6 hover:shadow-2xl transition-all">
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={() => onCheck(todo.id)}
      />
      <p>{todo.todo}</p>
      <button onClick={() => onDelete(todo.id)}>
        <Trash />
      </button>
    </div>
  );
}
