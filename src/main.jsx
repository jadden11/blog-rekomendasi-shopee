import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Collection from "./components/Collection";
import ProductFoods from "./pages/ProductFoods";
import ProductCLothes from "./pages/ProductClothes.jsx";
import Accessories from "./pages/accessories.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Collection />,
  },
  {
    path: "/foods",
    element: <ProductFoods />,
  },
  {
    path: "/clothes",
    element: <ProductCLothes />,
  },
  {
    path: "/accessories",
    element: <Accessories />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
