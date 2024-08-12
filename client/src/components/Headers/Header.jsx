import React from "react";

const Header = () => {
  return (
    <nav className="header flex justify-between bg-zinc-400 items-center h-16 px-4">
      <div className="logo">
        <h1 className="text-2xl font-normal">Task Management</h1>
      </div>
      <div className="buttons">
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Sign In
        </button>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Header;
