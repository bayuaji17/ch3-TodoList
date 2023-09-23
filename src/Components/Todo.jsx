import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    
    <div
      className={`flex items-center justify-between bg-[#219C90] text-white h-14 rounded-lg my-2 ${
        task.completed ? "line-through text-red-700" : ""
      }`}
    >
      <p className="mx-5">{task.task}</p>
      <div className="flex gap-4 mx-10">
        <input
          onClick={() => toggleComplete(task.id)}
          type="checkbox"
          className="accent-[#a02222]"
          checked={task.completed}
        ></input>
        <FontAwesomeIcon
          className=" hover:cursor-pointer"
          icon={faPencil}
          style={{ color: "#ffdf3d" }}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className=" hover:cursor-pointer"
          icon={faTrash}
          style={{ color: "#a02222" }}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
