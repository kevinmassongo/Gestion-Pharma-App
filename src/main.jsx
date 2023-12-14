import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "./pages/login.jsx";
import Layout from './components/layout/layout.jsx';
import LayoutAdmin from './components/layout/layoutAdmin.jsx';
import DashBoardNavBar from './components/dashboard-navbar/dashboard-navbar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/home.jsx";
import SingleProduct from "./pages/single-product.jsx";
import About from "./pages/about.jsx";
import Products from "./pages/products.jsx";
import ProductsList from "./pages/products-list.jsx";
import AllProduct from './pages/all-product.jsx';
import CreateProduct from './pages/create-product.jsx';
import UpdateProduct from './pages/update-product.jsx';
import DeleteProduct from './pages/delete-product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductsList />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/all-product",
        element: <AllProduct />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
      },
      {
        path: "/delete-product",
        element: <DeleteProduct />,
      },
],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
  