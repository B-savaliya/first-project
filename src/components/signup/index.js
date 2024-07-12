import React, { useState } from "react";
import Button from "../../common/components/button";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const submit = () => {
    let error = {};
    if (firstName === "") {
      error.fName = "* First name is required";
    }
    if (lastName === "") {
      error.lName = "* Last name is required";
    }
    if (email === "") {
      error.email = "* email is required";
    }
    setErrors(error);

    if (errors.email === "" && errors.lName === "" && errors.fName === "") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          fName: firstName,
          lName: lastName,
          email: email,
        })
      );
    }
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
        onChange={(e) => {
          setFirstName(e.target.value);
          setErrors(Object.assign(errors, { fName: "" }));
        }}
      ></input>
      <label>
        Last Name:
        <span style={{ color: "red", fontSize: "10px" }}>{errors.lName}</span>
      </label>
      <input
        id="lName"
        name="lName"
        onChange={(e) => {
          setLastName(e.target.value);
          setErrors(Object.assign(errors, { lName: "" }));
        }}
      ></input>
      <label>
        Email:
        <span style={{ color: "red", fontSize: "10px" }}>{errors.email}</span>
      </label>
      <input
        id="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors(Object.assign(errors, { email: "" }));
        }}
      ></input>
      <Button onClick={submit}></Button>
    </div>
  );
}

export default Signup;
