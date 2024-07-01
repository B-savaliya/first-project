import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../../common/data";

function Blogs() {
  return (
    <>
      <div>
        To blog details: <br />
        {blogData.map((el) => {
          return (
            <Link to={`/blog/${el.id}/category/${el.categoryId}`}>
              {el.text} <br />
              <h2>Heading</h2>
              <p>Description</p>
              <span>{el.comp}</span>
            </Link>
          );
        })}
      </div>
      <Outlet />
    </>
  );
}

export default Blogs;
