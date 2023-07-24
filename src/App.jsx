import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Main from "./components/Layout/Main";
import Shop from "./components/Shop/Shop";
import Checkout from "./components/checkout/Checkout";
import Inventory from "./components/inventory/Inventory";
import { productCartLoader } from "./components/loaders/productCartLoader";
import Login from "./components/login/Login";
import Orders from "./components/orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/shop",
        loader: () => fetch("products.json"),
        element: <Shop />,
      },
      {
        path: "/",
        loader: () => fetch("products.json"),
        element: <Shop />,
      },
      {
        path: "/orders",
        loader: productCartLoader,
        element: <Orders />,
      },
      { path: "checkout", element: <Checkout /> },
      { path: "inventory", element: <Inventory /> },
      {
        path: "log-in",
        element: <Login />,
      },
    ],
  },
  { path: "*", element: <Error /> },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
