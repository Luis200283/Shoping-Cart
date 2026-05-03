function Navbar() {
  return (
    <nav className="fixed flex justify-between  bg-gray-800/0 px-4 w-full z-10">
      <div
        id="Logo"
        className="flex-1 text-white font-bold text-xl sm:text-2xl flex items-center justify-between h-16"
      >
        Shoping Cart
      </div>

      <div
        id="navLinks"
        className=" flex flex-1 items-center justify-center space-x-5 sm:space-x-10"
      >
        <a href="#" className="text-gray-300 hover:text-white">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Products
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          Cart
        </a>
        <a href="#" className="text-gray-300 hover:text-white">
          About
        </a>
      </div>
      <div id="spaceador" className="flex-1 hidden md:flex"></div>
    </nav>
  );
}

export default Navbar;
