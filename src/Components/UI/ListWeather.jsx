import React from "react";

const ListWeather = () => {
  return (
    <div className="bg-white px-5  rounded-lg shadow-lg">
      <div className="my-20">
        <div className="flex p-1 rounded-lg bg-gray-300 items-center justify-between px-2">
          <div className="flex flex-col">
            <h4>Mon 9 jun</h4>
            <span>18C 33C</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ListWeather;
