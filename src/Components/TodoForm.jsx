import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  };
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="my-10 w-full max-w-screen-lg rounded-lg border border-gray-200 bg-slate-700 p-4 shadow">
        <div className="relative w-full flex ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={value}
            placeholder="Input todo list"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-[#219C90] my-2 py-2 rounded ml-auto w-full">
          Submit
        </button>
      </div>
    </form>
  );
};
