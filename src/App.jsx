import { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

import { FaPlus } from "react-icons/fa";
import NoTodo from "./components/NoTodo";

function App() {
  const input = useRef();
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
    // []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  });

  const countCompletedTodo = () => {
    var count = 0;
    todo.forEach((i) => {
      if (i.completed) {
        count++;
      }
    });
    return count;
  };

  const markTodoAsCompleted = (id) => {
    var todoIndex = todo.findIndex((item) => item.id == id);
    const newTodoList = [...todo]; //DESTRUCTURING
    var selectedTodo = newTodoList[todoIndex];
    selectedTodo.completed = !selectedTodo.completed;
    newTodoList[todoIndex] = selectedTodo;
    setTodo(newTodoList);
  };

  const deleteTodo = (id) => {
    var todoIndex;
    var selectedTodo;
    todoIndex = todo.findIndex((s) => s.id == id);
    const newTodoList = [...todo];
    newTodoList.pop(todoIndex);
    setTodo(newTodoList);
  };
  const newTodo = () => {
    // if todo is empty

    if (
      input.current.value == " " ||
      input.current.value == "" ||
      input.current.value == null
    ) {
      alert("Todo cant be empty");
      return;
    }

    setTodo([
      {
        id: todo.length + 1,
        todo: input.current.value,
        completed: false,
      },
      ...todo,
    ]);

    input.current.value = null;
  };
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
            onClick={newTodo}
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
        <p>Completed Todos: {countCompletedTodo()}</p>
      </div>

      {todo.length == 0 && <NoTodo />}

      <div className="px-10 pt-10 flex flex-col gap-5">
        {todo.map((item) => (
          // key in jsx
          <TodoItem
            todo={item}
            key={item.id}
            onCheck={markTodoAsCompleted}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// condition && jsx
