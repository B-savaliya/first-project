import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import Login from "../modules/login";
import Register from "../modules/register";
import ContactUs from "../modules/contactUs";
import Layout from "./layout";

function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      //   element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Layout>
              <Dashboard />
            </Layout>
          ),
        },
        {
          path: "/contact-us/:dynamicId",
          element: (
            <Layout>
              <ContactUs />
            </Layout>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routing;
