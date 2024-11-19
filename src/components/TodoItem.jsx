import React from "react";
import Trash from "./Trash";

export default function TodoItem({ todo }) {
  return (
    <div className="rounded-lg p-5 flex align-middle content-center bg-white shadow-md justify-between py-6 hover:shadow-2xl transition-all">
      <input type="checkbox" />
      <p>{todo}</p>
      <button>
        <Trash />
      </button>
    </div>
  );
}
