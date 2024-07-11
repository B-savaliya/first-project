import React, { useState } from "react";
import Button from "../../common/components/button";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  console.log("err*******", error);

  const submit = () => {
    if (firstName === "") {
      setError({ fName: "* Please enter first name" });
    }
    if (lastName === "") {
      setError({ lName: "* Please enter last name" });
    } else {
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
        <span style={{ color: "red", fontSize: "10px" }}>{error.fName}</span>
      </label>
      <input
        id="fName"
        name="fName"
        onChange={(e) => {
          setFirstName(e.target.value);
          setError("");
        }}
      ></input>
      <label>
        Last Name:
        <span style={{ color: "red", fontSize: "10px" }}>{error.lName}</span>
      </label>
      <input
        id="lName"
        name="lName"
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <label>Email:</label>
      <input
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <Button onClick={submit}></Button>
    </div>
  );
}

export default Signup;
