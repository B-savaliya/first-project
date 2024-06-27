// // new routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/home";
import Blogs from "./components/blogs";
import BlogDetails from "./components/blogs/blogDetails";
import ContactUs from "./components/contactus";

function App() {
  const routeData = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "blog",
          element: <Blogs />,
          children: [
            {
              path: ":id",
              element: <BlogDetails />,
            },
          ],
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/blog/blogdetails",
      element: <BlogDetails />,
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
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
