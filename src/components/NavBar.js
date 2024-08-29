import React from 'react';

export const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 rounded-xl dark:bg-gray-900">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-6">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="" className="h-12" alt="AI Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AI Powered</span>
                </a>
                {/* https://flowbite.com/docs/images/logo.svg */}
            <div className="hidden w-fit md:block md:w-auto" id="navbar-default">
                <div className="font-medium flex flex-col p-8 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       <button>
          <a href="#" className="block py-2 px-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Sign Up</a>
        </button>
        <button>
          <a href="#" className="block py-2 px-3 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </button>
        </div>
        </div>
        </div>
        </nav>
  )
}
export default NavBar;
