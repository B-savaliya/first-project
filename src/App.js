import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./shared/components/layout";
import Home from "./moduals/home";
import Notification from "./moduals/notificationsection";
import Setting from "./moduals/Settings";
import Login from "./moduals/login";
import Signup from "./moduals/singup";

function App() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/notification",
                    element: <Notification />,
                },
                {
                    path: "/setting",
                    element: <Setting />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/Signin",
            element: <Signup />,
        },
    ]);
    return (
      <>
        <RouterProvider router={router} />
      </>

    );
}

export default App;