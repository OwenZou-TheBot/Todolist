import { CheckCircleIcon as IncompleteCircle } from "@heroicons/react/outline";
import { CheckCircleIcon as CompleteCircle } from "@heroicons/react/solid";
import React from "react";

const Todos = [];

const Todolist = () => {
  const [t, sT] = React.useState(Todos);
  const [nT, sNT] = React.useState("");
  const inputChange = (e) => {
    sNT(e.target.value);
  };
  const addTodo = () => {
    if (nT.length === 0) {
      return alert("Enter a todo");
    }
    const nextTodos = [...t];
    nextTodos.push({ title: nT, completed: false });
    sT(nextTodos);
    sNT("");
  };
  const toggleComplete = (index) => {
    const nextTodos = [...t];
    nextTodos[index].completed = !nextTodos[index].completed;
    sT(nextTodos);
  };
  const deleteTodo = (index) => {
    const nextTodos = [...t];
    nextTodos.splice(index, 1);
    sT(nextTodos);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-center">
          {t.length ? `${t.length} todos for today` : "No todos for today"}
        </h1>
        <ul className="my-8 space-y-4">
          {t.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between space-x-5"
            >
              <div className="flex items-center space-x-5">
                <div
                  className="cursor-pointer"
                  onClick={() => toggleComplete(index)}
                >
                  {t.completed ? (
                    <CompleteCircle className="w-10 h-10 text-green-500" />
                  ) : (
                    <IncompleteCircle className="w-10 h-10 text-gray-500" />
                  )}
                </div>
                <span className="font-semibold truncate w-60">{t.title}</span>{" "}
                <button
                  onClick={() => deleteTodo(index)}
                  className="px-3 py-2 leading-tight text-white bg-red-500 rounded-full"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow-sm appearance-none"
            onChange={inputChange}
            value={nT}
            type="text"
          />
          <button
            className="w-40 px-4 py-2 text-white bg-blue-500 rounded-full"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todolist;
