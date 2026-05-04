function HeroHeader() {
  return (
    <header className="flex items-center overflow-hidden justify-between h-100 sm:h-120 bg-linear-to-r from-slate-900 to-slate-700 ">
      <div className=" rounded-3xl px-8 selection:bg-green-200 selection:text-green-900">
        <h1 className=" text-4xl sm:text-7xl md:text-8xl font-extrabold text-gray-100 text-shadow-lg/30 ">
          Shoping Online
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-2 text-shadow-lg/30">
          palabras secundatias para el HeroHader
        </p>
      </div>
      <div className="max-w-300 md:h-200">

        <img
          src="/public/icons/phone2.svg"
          alt=""
          className="h-full relative size-150 md:size-120 left-2 md:top-30"
        />
      </div>
    </header>
  );
}

export default HeroHeader;
