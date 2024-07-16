import React, { useState } from "react";
import Button from "../../common/components/button";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const isValidateForm = () => {
    let formIsValid = true;
    let error = {};
    if (!userInfo.fName || userInfo?.fName.trim() === "") {
      error.fName = "* First name is required";
      formIsValid = false;
    }
    if (!userInfo.lName || userInfo?.lName.trim() === "") {
      error.lName = "* Last name is required";
      formIsValid = false;
    }
    if (!userInfo.email || userInfo?.email.trim() === "") {
      error.email = "* email is required";
      formIsValid = false;
    }
    if (!userInfo.password || userInfo?.password.trim() === "") {
      error.password = "* password is required";
      formIsValid = false;
    }
    setErrors(error);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (isValidateForm()) {
      const userList = JSON.parse(localStorage.getItem("user")) || [];
      userList.push(userInfo);
      localStorage.setItem("user", JSON.stringify(userList));
      setUserInfo({ fName: "", lName: "", email: "", password: "" });
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <span>
        First Name:{" "}
        <span style={{ color: "red", fontSize: "10px" }}>{errors.fName}</span>
      </span>
      <input
        id="fName"
        type="text"
        name="fName"
        value={userInfo?.fName}
        onChange={handleOnChange}
      />
      <span>
        Last Name:
        <span style={{ color: "red", fontSize: "10px" }}>{errors.lName}</span>
      </span>
      <input
        id="lName"
        type="text"
        name="lName"
        value={userInfo?.lName}
        onChange={handleOnChange}
      />
      <span>
        Email:
        <span style={{ color: "red", fontSize: "10px" }}>{errors.email}</span>
      </span>
      <input
        id="email"
        type="email"
        name="email"
        value={userInfo?.email}
        onChange={handleOnChange}
      />
      <span>
        Password:
        <span style={{ color: "red", fontSize: "10px" }}>
          {errors.password}
        </span>
      </span>
      <input
        id="password"
        type="password"
        name="password"
        value={userInfo?.password}
        onChange={handleOnChange}
      />
      <Button title={"Submit"} onClick={handleSubmit}></Button>
    </div>
  );
}

export default Signup;
