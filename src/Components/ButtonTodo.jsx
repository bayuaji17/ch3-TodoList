import React from "react";

export const ButtonTodo = ({setFilter }) => {
  return (
    <>
      <div className="flex flex-row justify-center my-5">
        <button className="bg-[#219C90] my-2 mx-2 py-2 rounded w-3/12 text-white" onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className="bg-[#219C90] my-2 mx-2 py-2 rounded w-3/12 text-white"
          onClick={() => setFilter("done")}
        >
          Done
        </button>
        <button
          className="bg-[#219C90] my-2 mx-2 py-2 rounded w-3/12 text-white"
          onClick={() => setFilter("todo")}
        >
          Todo
        </button>
      </div>
    </>
  );
};
