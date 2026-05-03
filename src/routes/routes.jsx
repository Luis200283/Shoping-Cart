import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Product, { loader as productLoader } from "./Product.jsx";

export default function routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/products",
          element: <Product />,
          loader: productLoader,
        },
      ],
    },
  ]);

  return routes;
}
