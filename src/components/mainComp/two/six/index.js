import React, { useContext } from "react";
import MyContext from "../../../../myContext";

function Six() {
  const context = useContext(MyContext);
  console.log("comp_six******", context);

  return <div>Six{context?.details?.[0]?.name}</div>;
}

export default Six;
