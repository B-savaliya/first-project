// // new routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/home";
import Blogs from "./components/blogs";
import BlogDetails from "./components/blogs/blogDetails";
import ContactUs from "./components/contactus";
import { blogData } from "./common/data";
import Parent from "./components/parent";
import Signup from "./components/signup";

// Lifecycle of components
// Mounting // On Load
// Updating // On update
// Unmounting // On unload

// Props
// State

function App() {
  const parentData = blogData;
  let test = false;

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
  ];
  const router = createBrowserRouter(routeData);
  return <RouterProvider router={router} />;
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
