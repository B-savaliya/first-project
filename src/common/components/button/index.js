import React, { memo } from "react";
import "./button.css";

const Button = (props) => {
  // console.log("button re-rendering*****");
  return (
    <button
      // style={{ backgroundColor: props.color || "cyan" }}
      className={props.class}
      onClick={props.onClick}
    >
      {props.title || "Click me"}
    </button>
  );
};

export default memo(Button);

// Higher order function
// Higher order component
