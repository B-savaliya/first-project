import React from "react";
import Button from "../../../common/components/button";

function Child(props) {
  const childData = "child string";
  //   console.log("child_props******", props);
  // props.callBackFn(childData);
  // props.setCategory({ name: childData });

  return (
    <div>
      <Button onClick={() => props.setCategory({ name: childData })} />
    </div>
  );
}

export default Child;
