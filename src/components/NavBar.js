import React from "react";

export const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 rounded-xl m-2 dark:bg-gray-900">
      <div className="max-w-screen-2xl h-auto flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-12"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AI Powered
          </span>
        </a>

        <div className="h-fit md:block md:w-auto" id="navbar-default">
          <div className="font-medium flex p-4 mt-4 mx-auto rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <button>
              <a href="#" className="block py-2 px-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page">Login</a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
