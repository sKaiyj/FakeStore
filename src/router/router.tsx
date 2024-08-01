import { createHashRouter } from "react-router-dom";
import App from "../App";
import AuthPage from "../pages/authPage/AuthPage";
import BasketPage from "../pages/basketPage/BasketPage";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductPage from "../pages/productPage/ProductPage";
import BenefitsPage from "../pages/benefitsPage/BenefitsPage";
import ReviewsPage from "../pages/reviewsPage/ReviewsPage";
import MainPage from "../pages/mainPage/MainPage";

const router = createHashRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/login", element: <AuthPage /> },
      { path: "/basket", element: <BasketPage /> },
      { path: "/benefits", element: <BenefitsPage /> },
      { path: "/reviews", element: <ReviewsPage /> },
      { path: "/products", element: <ProductsPage /> },

      { path: "*", element: <MainPage /> },
    ],
  },
]);

export default router;
