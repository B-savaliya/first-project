import React, { useState } from "react";
import Button from "../../common/components/button";

function Signup() {
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    let error = {};
    if (userInfo.fName === "") {
      error.fName = "* First name is required";
    }
    if (userInfo.lName === "") {
      error.lName = "* Last name is required";
    }
    if (userInfo.email === "") {
      error.email = "* email is required";
    }
    setErrors(error);

    if (Object.keys(error).length <= 0) {
      const userList = JSON.parse (localStorage.getItem('user')) || [];
      userList.push(userInfo);
      localStorage.setItem("user", JSON.stringify(userList));
      setUserInfo({ fName: "", lName: "", email: "" });
    }
  };

  console.log("userInfo*****", userInfo);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <label>
        First Name:{" "}
        <span style={{ color: "red", fontSize: "10px" }}>{errors.fName}</span>
      </label>
      <input
        id="fName"
        name="fName"
        value={userInfo.fName}
        onChange={handleOnChange}
      ></input>
      <label>
        Last Name:
        <span style={{ color: "red", fontSize: "10px" }}>{errors.lName}</span>
      </label>
      <input
        id="lName"
        name="lName"
        value={userInfo.lName}
        onChange={handleOnChange}
      ></input>
      <label>
        Email:
        <span style={{ color: "red", fontSize: "10px" }}>{errors.email}</span>
      </label>
      <input
        id="email"
        name="email"
        value={userInfo.email}
        onChange={handleOnChange}
      ></input>
      <Button title={"Submit"} onClick={handleSubmit}></Button>
    </div>
  );
}

export default Signup;
