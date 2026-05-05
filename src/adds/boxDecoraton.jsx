export default function BoxDecoration() {
  return (
    <div className="mx-auto bg-gray-700 w-1/2 py-10 flex font-extrabold ">
      <div className="mx-auto text-left">
        <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white text-4xl">
          Hello
          <br />
          World
        </span>
      </div>
      <div className="mx-auto text-left">
        <span className="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white text-4xl">
          Hello
          <br />
          World
        </span>
      </div>
    </div>
  );
}
