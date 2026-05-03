import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className=" w-full h-screen flex flex-col gap-2 justify-center items-center "
    >
      <img
        src="/src/assets/error.svg"
        alt="error image"
        className="size-80"
      />
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="text-xl font-medium text-red-800">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className=" text-2xl">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
