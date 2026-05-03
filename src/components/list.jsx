export default function List() {
  return (
    <ul
      role="list"
      className="bg-gray-800 p-3 flex flex-col gap-2 text-white mt-10 rounded-lg border border-gray-200 w-1/2 mx-auto **:data-avatar:size-12 **:data-avatar:rounded-full "
    >
      <li class="group/edit hover:bg-gray-700 flex gap-2 p-2 rounded-lg items-center h-17">
        <img
          data-avatar
          src="/src/assets/heroHeader.svg"
          alt=""
          className=" bg-gray-200 p-1"
        />
        <div className="flex-3  py-1">
          <h2 className="font-bold">Hector Adams</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>
        <button class="hidden group-hover/edit:inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-400 rounded-3xl hover:bg-gray-900 z-100">
          Llamar
        </button>
      </li>
      <li class="group/edit hover:bg-gray-700 flex gap-2 p-2 rounded-lg items-center">
        <img
          data-avatar
          src="/src/assets/heroHeader.svg"
          alt=""
          className=" bg-gray-200 p-1"
        />
        <div className="flex-3  py-1">
          <h2 className="font-bold">Hector Adams</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>
        <button class="hidden group-hover/edit:inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-400 rounded-3xl hover:bg-gray-900 z-100">
          Llamar
        </button>
      </li>{" "}
      <li class="group/edit hover:bg-gray-700 flex gap-2 p-2 rounded-lg items-center">
        <img
          data-avatar
          src="/src/assets/heroHeader.svg"
          alt=""
          className=" bg-gray-200 p-1"
        />
        <div className="flex-3  py-1">
          <h2 className="font-bold">Hector Adams</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>
        <button class="hidden group-hover/edit:inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-400 rounded-3xl hover:bg-gray-900 z-100">
          Llamar
        </button>
      </li>{" "}
      <li class="group/edit hover:bg-gray-700 flex gap-2 p-2 rounded-lg items-center">
        <img
          data-avatar
          src="/src/assets/heroHeader.svg"
          alt=""
          className=" bg-gray-200 p-1"
        />
        <div className="flex-3  py-1">
          <h2 className="font-bold">Hector Adams</h2>
          <p className="text-gray-400">Software Engineer</p>
        </div>
        <button class="hidden group-hover/edit:inline-flex items-center gap-1 px-3 py-2 text-sm text-gray-400 rounded-3xl hover:bg-gray-900 z-100">
          Llamar
        </button>
      </li>{" "}
    </ul>
  );
}
