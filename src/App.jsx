import { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

import { FaPlus } from "react-icons/fa";
import NoTodo from "./components/NoTodo";

function App() {
  const input = useRef();

  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );
  
  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todo));
    }
  });

  return (
    // <PlayGround />
    <div>
      {/* container for input */}
      <div className="py-[20px] ">
        <div className="flex justify-center border bg-white  w-[300px] mx-auto py-1 px-2 rounded-lg border-gray-400">
          <input
            // use ref
            ref={input}
            type="text"
            placeholder="add your todos.."
            className="outline-none flex-1"
          />

          <button
            onClick={() => {
              // if todo is empty

              if (
                input.current.value == " " ||
                input.current.value == "" ||
                input.current.value == null
              ) {
                alert("Todo cant be empty");
                return;
              }

              setTodo([input.current.value, ...todo]);
              input.current.value = null;
            }}
            className="bg-blue-400 text-white p-2 rounded-full
        text-sm hover:bg-blue-600 transition-all
        "
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* stats */}
      <div className="flex justify-between px-6 text-white font-semibold">
        <p>Total Todos: {todo.length}</p>
        <p>Completed Todos: {todo.length}</p>
      </div>

      {todo.length == 0 && <NoTodo />}

      <div className="px-10 pt-10 flex flex-col gap-5">
        {todo.map((item) => (
          <TodoItem todo={item} />
        ))}
      </div>
    </div>
  );
}

export default App;

// condition && jsx
