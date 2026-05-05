import { useState } from "react";
import { Link } from "react-router-dom";
import someImg from "../assets/users/user1.avif";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed flex justify-between  bg-gray-800 px-4 w-full z-10">
      <div
        id="Home"
        className="flex-4 sm:flex-3 lg:flex-1 text-xl sm:text-2xl flex items-center justify-between h-16"
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
        className="flex flex-2 items-center focus:outline-none justify-center space-x-5 sm:space-x-10"
      >
        <div className="relative hidden sm:block px-2 sm:px-10">
          <input
            placeholder="Search"
            type="text"
            className="bg-gray-50 w-50 md:w-100 rounded-full px-2 text-gray-700 text-center p-1 focus:ring-0 focus:outline-none"
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

      <div
        id="shopCart"
        className="flex flex-1 w-10 justify-end items-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="w-12 h-12 bg-gray-700 shadow-sm/30 flex items-center justify-center rounded-full  hover:bg-gray-100 group">
          <span className="text-teal-600 font-extrabold absolute text-sm text-shadow-2xl/30 top-0.5 right-3 w-5 h-5 text-center bg-gray-100 rounded-full group-hover:bg-teal-400 group-hover:text-gray-100">
            0
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="size-8 group-hover:stroke-teal-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>

      <div
        id="Cart-Modal"
        className={`${open ? "block": "hidden"} bg-white w-full sm:w-100 h-110 absolute right-1 top-16 rounded-sm p-6`}
      >
        <h1 className="text-2xl font-bold border-b-2 border-gray-200 py-1">
          Shoping Cart
        </h1>

        <div
          id="Products"
          className="border-b-2 border-gray-200 py-1 h-45 overflow-auto"
        >
          <div className="p-2 my-1 flex justify-between items-center">
            <div id="info" className="flex items-center gap-4">
              <img src={`${someImg}`} className="size-12" />
              <div className="leading-5">
                <h1 className="font-bold">Blueberry</h1>
                <p className="text-gray-800 font-medium">rose</p>
                <p className="text-gray-400">Q: 2</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                id="Trash"
                className="w-10 h-10 bg-white shadow-sm/30 flex items-center justify-center rounded-sm  hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div className="font-bold">23.0$</div>
            </div>
          </div>
          <div className="p-2 my-1 flex justify-between items-center">
            <div id="info" className="flex items-center gap-4">
              <img src={`${someImg}`} className="size-12" />
              <div className="leading-5">
                <h1 className="font-bold">Blueberry</h1>
                <p className="text-gray-800 font-medium">rose</p>
                <p className="text-gray-400">Q: 2</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                id="Trash"
                className="w-10 h-10 bg-white shadow-sm/30 flex items-center justify-center rounded-sm  hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div className="font-bold">23.0$</div>
            </div>
          </div>
          <div className="p-2 my-1 flex justify-between items-center">
            <div id="info" className="flex items-center gap-4">
              <img src={`${someImg}`} className="size-12" />
              <div className="leading-5">
                <h1 className="font-bold">Blueberry</h1>
                <p className="text-gray-800 font-medium">rose</p>
                <p className="text-gray-400">Q: 2</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                id="Trash"
                className="w-10 h-10 bg-white shadow-sm/30 flex items-center justify-center rounded-sm  hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div className="font-bold">23.0$</div>
            </div>
          </div>
        </div>

        <div>
          <div id="Total">
            <div className="py-4 px-2 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <h1 className="font-bold text-xl">Total</h1>
                <p className="text-gray-600 font-light">(incl. IVA)</p>
              </div>
              <div className="flex px-4 font-medium text-xl">69$</div>
            </div>
          </div>
          <div className="flex flex-col py-2 items-center gap-4">
            <button className="bg-teal-600 hover:text-gray-100 hover:bg-teal-500 shadow-lg/20 text-white font-bold w-1/2 py-2 rounded-xl">Chackout</button>
            <button className="text-white  hover:text-gray-100 bg-gray-800 hover:bg-gray-700 shadow-lg/20 font-bold w-1/2 py-2 rounded-xl">See in Cart</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
