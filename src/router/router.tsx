import { createHashRouter } from "react-router-dom";
import App from "../App";
import AuthPage from "../pages/authPage/AuthPage";
import BasketPage from "../pages/basketPage/BasketPage";
import MainPage from "../pages/mainPage/MainPage";
import ProductPage from "../pages/productPage/ProductPage";

const router = createHashRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/login", element: <AuthPage /> },
      { path: "/basket", element: <BasketPage /> },
    ],
  },
]);

export default router;
