import React, { forwardRef, useEffect, useRef } from "react";

function UseRefComp() {
  const myRef = useRef({});
  const inputRef = useRef({});

  useEffect(() => {
    myRef.current.style.color = "red";
  }, []);

  const handleChange = (event) => {
    inputRef.current = {
      [event.target.name]: event.target.value,
    };
  };

  const handleClick = () => {
    console.log("ref_value********", inputRef.current);
  };

  return (
    <div>
      <p>This is paragraph</p>
      <input type="text" name="input" onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      name: {inputRef.current.input}
      <Child ref={myRef} />
    </div>
  );
}

export default UseRefComp;

const Child = forwardRef((props, ref) => {
  return (
    <div>
      <p ref={ref}>Child</p>
    </div>
  );
});
