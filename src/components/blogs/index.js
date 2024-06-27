import React from "react";
import { Link, Outlet } from "react-router-dom";

function Blogs() {
  return (
    <div>
      This is blog page
      <Link to={"/blog/ksjlfdjkldsfkjlsdfjklsdfslkjdf"}>To blog details</Link>
      <Outlet />
    </div>
  );
}

export default Blogs;
