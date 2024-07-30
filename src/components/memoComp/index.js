import React, { useCallback, useMemo, useState } from "react";
import Button from "../../common/components/button";

function UseMemoComp() {
  const [inputString, setInputString] = useState("");
  const [anotherState, setAnotherState] = useState(false);

  // const test = useMemo(() => {}, [])
  // useCallback(() => {}, [])

  console.log("parent is re-rendering*****");
  const handleClick = useCallback(() => {
    console.log("testing********");
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
