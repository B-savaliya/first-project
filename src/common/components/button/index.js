import React from "react";
import "./button.css";

function Button(props) {
  return (
    <button
      // style={{ backgroundColor: props.color || "cyan" }}
      className={props.class}
      onClick={props.onClick}
    >
      {props.title || "Click me"}
    </button>
  );
}

export default Button;
