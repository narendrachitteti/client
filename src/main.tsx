import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
// import Cancel from "./pages/Cancel.tsx";
import Cart from "./pages/Cart.tsx";
import Category from "./pages/Category.tsx";
import Subcategory from "./ui/SubCategory.tsx";
import Favorite from "./pages/Favorite.tsx";
import NotFound from "./pages/NotFound.tsx";
import Orders from "./pages/Orders.tsx";
import Profile from "./pages/Profile.tsx";
// import Success from "./pages/Success.tsx";
import Layout from "./ui/Layout.tsx";
import AllCategories from "./ui/Allcategories.tsx";
import Productpage from "./ui/Productpage.tsx";
import ProductDetailsPage from "./ui/ProductDetailpage.tsx";
import AllBrands from "./ui/AllBrands.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import CartPage from "./ui/CartPage.tsx";
import Login from "./ui/Login.tsx";
import CheckoutBtn from "./ui/CheckoutBtn.tsx";
import ProductSection from "./ui/ProductList.tsx";
import Allcrops from "./ui/AllCrops.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/checkout",
        element: <CheckoutBtn />,
      },
      {
        path: "/all-brands",
        element: <AllBrands />,
      },
      {
        path: "/all-crops",
        element: <Allcrops />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/categories",
        element: <AllCategories />,
      },
      {
        path: "/category/:categoryId/subcategory",
        element: <Subcategory />, // Add the Subcategory route here
      },
      {
        path: "/category/:categoryId/subcategory/:subcategoryId/products",
        element: <Productpage />, // Add the Subcategory route here
      },
      {
        path: "/products/brand/:brandId",
        element: <Productpage />, // Add the Subcategory route here
      },
      {
        path: "/products/crop/:cropId",
        element: <Productpage />, // Add the Subcategory route here
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPage />, // Add the Subcategory route here
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products",
        element: <ProductSection />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      // {
      //   path: "/orders",
      //   element: <Orders />,
      // },
      // {
      //   path: "/success",
      //   element: <Success />,
      // },
      // {
      //   path: "/cancel",
      //   element: <Cancel />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
