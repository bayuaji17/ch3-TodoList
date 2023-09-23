import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const FormSearch = ({ searchTerm, handleSearch,filteredTodos}) => {
  return (
    <>
      <div className="w-full max-w-screen-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
        <div className="relative w-full flex ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Todo"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-row gap-3 text-white">
          <button className="bg-[#219C90] my-2 py-2 rounded w-full"
          onClick={filteredTodos}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};
