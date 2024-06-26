import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
      This is blog page
      <Link to={"/blog/blogdetails"}>To blog details</Link>
    </div>
  );
}

export default Blogs;
