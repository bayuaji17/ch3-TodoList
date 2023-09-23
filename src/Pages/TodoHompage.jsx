import React, { useState } from "react";
import { TodoForm } from "../Components/TodoForm";
import { FormSearch } from "../Components/FormSearch";
import { ButtonTodo } from "../Components/ButtonTodo";
import { Todo } from "../Components/Todo";
import { EditTodoForm } from "../Components/EditTodoForm";

export const TodoHompage = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Nyuci mobil",
      completed: true,
    },
    {
      id: 2,
      task: "Memberi makan kucing",
      completed: true,
    },
    {
      id: 3,
      task: "Olahraga 10 menit",
      completed: false,
    },
    {
      id: 4,
      task: "Sarapan sereal",
      completed: true,
    },
    {
      id: 5,
      task: "Belanja harian",
      completed: false,
    },
    {
      id: 6,
      task: "Ngeprint tugas",
      completed: true,
    },
    {
      id: 7,
      task: "Bayar tagihan bulanan",
      completed: true,
    },
    {
      id: 8,
      task: "Berangkat kuliah",
      completed: false,
    },
    {
      id: 9,
      task: "Les bahasa Inggris",
      completed: true,
    },
    {
      id: 10,
      task: "Ke rumah Sabrina",
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState("all");

  const [searchTerm, setSearchTerm] = useState("");

  // setDataAwal(todos)
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Math.random(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteDoneTasks = () => {
    const updatedTodoList = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodoList);
  };

  const deleteAllTasks = () => {
    setTodos([]);
  };
//setDataSearch = handleSearch
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
// filterdata = filtertodos 
    const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col h-screen items-center my-8">
        <h1 className="text-4xl mb-8 font-bold">Todo Search</h1>
        {/* Form atas Search */}
        <FormSearch searchTerm={searchTerm} handleSearch={handleSearch} />
        {/* Akhir form atas Search */}

        {/* Todo LIST */}
        <div className="w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow my-8 ">
          <h1 className="text-4xl text-center font-semibold">TodoList</h1>
          {/* FORM INPUT */}
          <TodoForm addTodo={addTodo} />
          {/* FORM INPUT */}

          {/* ALL BUTTON */}
          <ButtonTodo filter={filter} setFilter={setFilter} />
 
          {filteredTodos.map(
            (todo, index) =>
              todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )
          )}

          {/* <Todo/> */}

          <div className="flex flex-row justify-center my-5">
            <button
              className="bg-[#a02222] my-2 mx-2 py-2 rounded w-3/12 text-white"
              onClick={deleteDoneTasks}
            >
              Delete Done Task
            </button>
            <button
              className="bg-[#a02222] my-2 mx-2 py-2 rounded w-3/12 text-white"
              onClick={deleteAllTasks}
            >
              Delete All Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
