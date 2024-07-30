import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../../common/data";
import ContactUs from "../contactus";

function Blogs(props, dataFromContactus) {
  // console.log("props*****", props);
  return (
    <>
      <div>
        To blog details: <br />
        {blogData.map((el, i) => {
          return (
            <Link to={`/blog/${i + 1}/category/${el.categoryId}`}>
              {el.text} <br />
              <h2>Heading</h2>
              <p>Description</p>
              <span>{el.comp}</span>
            </Link>
          );
        })}
        <ContactUs isApp={false} />
      </div>
      <Outlet />
    </>
  );
}

export default Blogs;
