import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(true)

  return (
    <nav className="fixed flex justify-between  bg-gray-800 px-4 w-full z-10">
      <div
        id="Home"
        className="text-2xl flex items-center h-16"
      >
        <Link
          to="/"
          className="text-center leading-5 font-extrabold text-white hover:text-teal-400 hover:text-shadow-lg/30 rounded-full px-2"
        >
          Shoping Cart
        </Link>
      </div>

      <div
        id="Seach-bar"
        className="flex flex-1 items-center focus:outline-none justify-center space-x-5 sm:space-x-10"
      >
        <div className="relative hidden sm:block px-2 sm:px-10">
          <input
            placeholder="Search"
            type="text"
            className="bg-gray-50 w-50 md:w-100 lg:w-120 rounded-full px-2 text-gray-700 text-center p-1 focus:ring-0 focus:outline-none"
          />
          <div className="hidden sm:block absolute -top-1 right-0">
            <div className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-gray-100 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-6 group-hover:stroke-teal-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Link to={open ? "/cart/1" : "/"}>
        <div
          id="shopCart"
          className="flex flex-1 items-center h-full"
          onClick={() => setOpen(!open)}
        >
          <div className="w-12 h-12 bg-gray-700 shadow-sm/30 flex items-center justify-center rounded-full  hover:bg-gray-100 group">
            <span className="text-teal-600 font-extrabold absolute text-sm text-shadow-2xl/30 top-0.5 right-3 w-5 h-5 text-center bg-gray-100 rounded-full group-hover:bg-teal-400 group-hover:text-gray-100">
              0
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-8 group-hover:stroke-teal-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
        </div>
      </Link>
      <div id="modal">
        <Outlet />
      </div>
    </nav>
  );
}

export default Navbar;
