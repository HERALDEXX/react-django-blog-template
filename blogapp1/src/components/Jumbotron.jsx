import React from "react";

const Jumbotron = () => {
  return (
    <section className="bg-violet-950 mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          Django Backend and React UI on Vite.
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          Django handles the backend, including server-side logic and database
          management, while React creates a dynamic, interactive frontend.
          Together, they build a full-stack web app, combining Django's APIs
          with React's user interface.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
