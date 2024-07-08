import React, { useState } from "react";
import Button from "../../common/components/button";

function Signup() {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (event) => {
    console.log("event******", event);
    const inputValues = {
      fName: event.target.value,
    };
    setUserInfo(inputValues);
  };

  const handleSubmit = () => {
    console.log("userInfo******", userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <div>
      <label>First Name:</label>
      <input name="fName" onChange={(event) => handleChange(event)}></input>
      <Button onClick={handleSubmit} />
    </div>
  );
}

export default Signup;
