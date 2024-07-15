import React, { useState } from "react";
import Button from "../../common/components/button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const data = { ...credentials, [name]: value };
    setCredentials(data);
  };
  console.log("credentials*****", credentials);

  const handleSubmit = () => {
    const usersList = JSON.parse(localStorage.getItem("user"));

    if (
      usersList.find(
        (el) =>
          el.email === credentials.email && el.fName === credentials.password
      )
    ) {
      navigate("/");
    } else {
      alert("user not found");
    }
  };
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
      <Button title={"Login"} onClick={handleSubmit}></Button>
    </div>
  );
}

export default Login;
