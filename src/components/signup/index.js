import React, { useState } from "react";
import Button from "../../common/components/button";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Signup() {
  const [params] = useSearchParams();
  const editId = params.get("editId");

  const storedUsers = JSON.parse(localStorage.getItem("user"));

  const [userInfo, setUserInfo] = useState(
    storedUsers[Number(editId) - 1] || {
      fName: "",
      lName: "",
      email: "",
      password: "",
    }
  );
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
    const exp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("******", exp.test(userInfo?.email));
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
      if (editId) {
        userList.splice(editId - 1, 1, userInfo);
        // userList.map((el, i) => (editId - 1 === i ? userInfo : el))
        localStorage.setItem("user", JSON.stringify(userList));
      } else {
        userList.push({ ...userInfo, id: uuidv4() });
        localStorage.setItem("user", JSON.stringify(userList));
      }
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
      <Button
        title={editId ? "Update" : "Submit"}
        onClick={handleSubmit}
      ></Button>
    </div>
  );
}

export default Signup;
