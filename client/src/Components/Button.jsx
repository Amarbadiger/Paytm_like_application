import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
      >
        {label}
      </button>
    </>
  );
};

export default Button;
