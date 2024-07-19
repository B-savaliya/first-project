import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../../common/data";
import ContactUs from "../contactus";

function Blogs(props, dataFromContactus) {
  // console.log("props*****", props);
  const myRef = useRef(null);
  const myPRef = useRef({ value: 0 });

  useEffect(() => {
    console.log("ref check*****", myRef.current, myPRef.current);
    myRef.current.style.color = "yellow";
  }, []);

  console.log("test render****", myPRef.current);

  const handleClick = () => {
    myPRef.current.value = myPRef.current.value + 1;
    console.log("insidelog test****", myPRef.current.value);
  };

  return (
    <>
      <div>
        To blog details: <br />
        {[0].map((el, i) => {
          return (
            <>
              {/* <Link to={`/blog/${i + 1}/category/${el.categoryId}`}> */}
              {el} <br />
              <h2 ref={myRef}>Heading</h2>
              <p>Description</p>
              <span onClick={handleClick}>{el}</span>
              {/* </Link> */}
            </>
          );
        })}
        {/* <ContactUs isApp={false} /> */}
      </div>
      <Outlet />
    </>
  );
}

export default Blogs;
