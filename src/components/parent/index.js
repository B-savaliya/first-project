import React, { useState } from "react";
import Child from "./children";
import Button from "../../common/components/button";

// useState
// useEffect
// useContext

function Parent(props) {
  const parentData = "this is parent string";
  const [category, setCategory] = useState({ name: "test" });
  //   console.log("parent_props******", props);

  console.log("category********", category);

  const callBackFn = (params) => {
    console.log("params*******", params);
  };

  return (
    <div>
      <Child
        parentData={parentData}
        callBackFn={callBackFn}
        setCategory={setCategory}
      />
      {category.name}
      <Button onClick={() => setCategory({ name: "john" })} />
    </div>
  );
}

export default Parent;


// mounting
// updating
// unmounting