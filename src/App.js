import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Blogs from "./components/blogs";
import BlogDetails from "./components/blogs/blogDetails";

// browserrouter
// routes
// route

function App() {
  const routeData = [
    {
      path: "/",
      element: <Home />,
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
  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        {routeData.map((el) => {
          return <Route path={el.path} element={el.element} key={el.path} />;
        })}
        {/* <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/blogdetails" element={<BlogDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
