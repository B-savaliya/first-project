import React, { useState } from "react";
import Button from "../../common/components/button";

function Login() {
  const [credentials, setCredentials] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const data = { ...credentials, [name]: value };
    setCredentials(data);
  };
  console.log("credentials*****", credentials);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <label>Email:</label>
      <input
        id="email"
        name="email"
        onChange={(e) => handleOnChange(e)}
      ></input>
      <label>Password:</label>
      <input
        id="password"
        name="password"
        onChange={(e) => handleOnChange(e)}
      ></input>
      <Button title={"Login"} onClick={null}></Button>
    </div>
  );
}

export default Login;
