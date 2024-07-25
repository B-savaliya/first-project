import React, { useEffect, useRef } from "react";

function UseRefComp() {
  const myRef = useRef(null);
  useEffect(() => {
    console.log("******", (myRef.current.style.color = "red"));
  }, []);
  return (
    <div>
      <p ref={myRef}>This is paragraph</p>
    </div>
  );
}

export default UseRefComp;
