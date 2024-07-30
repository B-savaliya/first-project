// // new routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/home";
import Blogs from "./components/blogs";
import BlogDetails from "./components/blogs/blogDetails";
// import ContactUs from "./components/contactus";
import { blogData } from "./common/data";
import Parent from "./components/parent";
import Signup from "./components/signup";
import Login from "./components/login";
import Users from "./components/users";
import MainComp from "./components/mainComp";
import MyContext from "./myContext";
import { lazy, useEffect, useState } from "react";
import UseRefComp from "./components/RefComp";
import UseMemoComp from "./components/memoComp";
const ContactUs = lazy(() => import("./components/contactus"));

// Lifecycle of components
// Mounting // On Load
// Updating // On update
// Unmounting // On unload

// Props
// State

function App() {
  const parentData = blogData;
  let test = false;
  const [details, setDetails] = useState([]);

  const routeData = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "blog",
          element: <Blogs blogData={parentData} />,
        },
        {
          path: "blog/:id/category/:categoryId",
          element: <BlogDetails test={parentData} />,
        },
        {
          path: "contactus",
          element: <ContactUs data={parentData} isApp />,
        },
      ],
    },
    {
      path: "/parent",
      element: <Parent />,
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/blog/blogdetails",
      element: <BlogDetails />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/mainComp",
      element: <MainComp />,
    },
    {
      path: "useRef",
      element: <UseRefComp />,
    },
    {
      path: "useMemo",
      element: <UseMemoComp />,
    },
  ];
  const router = createBrowserRouter(routeData);

  return (
    <>
      <MyContext.Provider value={{ details, setDetails }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;

// Old routing
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Layout from "./components/home";
// import Blogs from "./components/blogs";
// import BlogDetails from "./components/blogs/blogDetails";

// // browserrouter
// // routes
// // route

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={"/"} element={<Layout />}>
//           <Route path={"blog"} element={<Blogs />}>
//             <Route path={"blogdetails"} element={<BlogDetails />} />;
//           </Route>
//         </Route>
//         <Route path={"/blog/:id/category/:categoryId"} element={<BlogDetails />}>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
