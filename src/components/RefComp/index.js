import React, { forwardRef, useEffect, useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/reducers/authSlice";

const initialArg = {
  name: "",
  count: 0,
};

const reducer = (state, action) => {
  console.log("state****", state, "action*****", action);
  switch (action.type) {
    case "NAME_CHANGE":
      return { ...state, name: action.request };

    case "COUNT_CHANGE":
      return { ...state, count: action.request };

    default:
      return state;
  }
};

function UseRefComp() {
  const myRef = useRef({});
  const inputRef = useRef({});
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.usersData);
  const [localState, dispatcher] = useReducer(reducer, initialArg);

  useEffect(() => {
    console.log(
      "data******",
      dispatcher({ type: "NAME_CHANGE", request: "testing" }),
      dispatcher({ type: "COUNT_CHANGE", request: 6 })
    );
    myRef.current.style.color = "red";
  }, []);

  console.log("localState******", localState);

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
