import { createBrowserRouter } from "react-router-dom";
import App, {
  loader as productLoader,
  action as productAction,
} from "../App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Cart from "./cart.jsx";

export default function routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      loader: productLoader,
      action: productAction,
      children: [
        {
          path: "/cart/:cartId",
          element: <Cart />,
        }
      ]
    },
  ]);

  return routes;
}
