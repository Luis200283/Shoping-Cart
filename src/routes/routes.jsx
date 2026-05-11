import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { loader as productLoader } from "../components/Product.jsx"
import Cart, { loader as cartLoader } from "./cart.jsx";

export default function routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      loader: productLoader,
      children: [
        {
          path: "/cart",
          element: <Cart />,
          loader: cartLoader
        }
      ]
    },
  ]);

  return routes;
}
