import React, { useEffect, useState } from "react";
import Button from "../../common/components/button";
import axios from "axios";
import instance, { ApiGet } from "../../api";

function ContactUs(props) {
  const [clicked, setClicked] = useState(false);
  const [anotherState, setAnotherState] = useState(false);
  const [recipes, setRecipes] = useState([]);
  console.log("contact us*******", recipes);

  useEffect(() => {
    getRecipes();
    return () => {
      setRecipes([]);
      console.log("contact us clean up fun call*******");
    }; // this will only be called on un mounting of this component
  }, []);

  const getRecipes = async () => {
    let response = await ApiGet("/recipes");
    console.log("response********", response);

    setRecipes(response.data.recipes);

    // fetch("https://dummyjson.com/recipes")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setRecipes(res.recipes);
    //   });
  };

  return (
    <div>
      Contact us
      <Button
        title={"check update"}
        onClick={() => {
          setClicked(!clicked);
        }}
      />
      <Button
        title={"check another one"}
        onClick={() => {
          setAnotherState(!anotherState);
        }}
      />
      {recipes.map((el) => (
        <div key={el.name}>
          <h1>{el.name}</h1>
          <img src={el.image} alt={el.name} />
        </div>
      ))}
    </div>
  );
}

export default ContactUs;
