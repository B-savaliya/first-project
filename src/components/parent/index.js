import React from "react";
import Child from "./children";

function Parent(props) {
  const parentData = "this is parent string";
//   console.log("parent_props******", props);

  const callBackFn = (params) => {
    console.log("params*******", params);
  };

  return (
    <div>
      <Child parentData={parentData} callBackFn={callBackFn} />
    </div>
  );
}

export default Parent;
