import React, { forwardRef, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/reducers/authSlice";

function UseRefComp() {
  const myRef = useRef({});
  const inputRef = useRef({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.usersData);
  console.log("data******", data);

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

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
