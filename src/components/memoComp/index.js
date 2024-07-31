import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../common/components/button";
import useStorage from "../../hooks/useStorage";

function UseMemoComp() {
  const [inputString, setInputString] = useState("");
  const [anotherState, setAnotherState] = useState(false);

  const [storedValue, setStorage, removeValue] = useStorage("test3");

  useEffect(() => {
    console.log(
      "value****",
      storedValue,
      setStorage("test-value", 123),
      removeValue("test-value")
    );
  }, []);

  // const test = useMemo(() => {}, [])
  // useCallback(() => {}, [])

  // console.log("parent is re-rendering*****");
  const handleClick = useCallback(() => {
    // console.log("testing********");
  }, []);

  const handleChange = (ev) => {
    setInputString(ev.target.value);
  };

  return (
    <div>
      <input type="text" name="normal" onChange={handleChange}></input>
      <button onClick={() => setAnotherState(!anotherState)}>
        Change another state
      </button>
      <Button onClick={handleClick} />
    </div>
  );
}

export default UseMemoComp;
