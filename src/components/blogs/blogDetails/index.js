import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../../common/data";

function BlogDetails() {
  const param = useParams();
  console.log("param*******", param);

  const selectedBlog = blogData.find((el) => el.id == param.id);

  return (
    <div>
      This is blog details page and this one is the current blog:{" "}
      {selectedBlog.text}
    </div>
  );
}

export default BlogDetails;
