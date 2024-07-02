import React from "react";

function Button(props) {
  return (
    <button style={{ backgroundColor: props.color || "cyan" }}>
      {props.title || "Click me"}
    </button>
  );
}

export default Button;
