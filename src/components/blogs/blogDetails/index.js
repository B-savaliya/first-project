import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../../common/data";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../lib/redux/reducers/common";

function BlogDetails(props) {
  const param = useParams();
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.common.counter);

  const selectedBlog = blogData.find((el) => el.id == param.id);

  const handleOnClick = (key) => {
    switch (key) {
      case "INCREMENT":
        dispatch(increment(5));
        break;
      case "DECREMENT":
        dispatch(decrement(10));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      This is blog details page and this one is the current blog: {counter}
      {/* {selectedBlog.text} */}
      {/* {selectedBlog.comp} */}
      <button onClick={() => handleOnClick("INCREMENT")}>Increase Count</button>
      <button onClick={() => handleOnClick("DECREMENT")}>Decrease Count</button>
    </div>
  );
}

export default BlogDetails;
