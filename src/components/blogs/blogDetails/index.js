import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../../common/data";

function BlogDetails(props) {
  const param = useParams();
  console.log("props*******", props);

  const selectedBlog = blogData.find((el) => el.id == param.id);

  return (
    <div>
      This is blog details page and this one is the current blog:{" "}
      {selectedBlog.text}
      {selectedBlog.comp}
    </div>
  );
}

export default BlogDetails;
