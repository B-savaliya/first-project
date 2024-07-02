import React from "react";

function Child(props) {
  const childData = "child string";
//   console.log("child_props******", props);
  props.callBackFn(childData)
  return <div></div>;
}

export default Child;
