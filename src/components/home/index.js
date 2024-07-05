import React, { useEffect, useState } from "react";
import Button from "../../common/components/button";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    setRecipes([])
    getRecipes()
  }, [])
  
  const getRecipes = () => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRecipes(res.recipes);
      });
  };
  return (
    <div>
      <h1>This is home page, the count is: {count}</h1>
      <br />
      {/* <Link to={"/blog"}> */}
      <Button color={"red"} title={"red button"} class={"redButton"} />
      <Button class={"pinkButton"} onClick={() => setCount(count + 1)} />
      <Button color={"pink"} title={"pink button"} onClick={getRecipes} />
      <button onClick={() => navigate("/blog")}>click</button>
      <button onClick={() => navigate("/")}>go to home</button>
      {/* </Link> */}
      {console.log("********", recipes)}
      {recipes.map((el) => (
        <div>
          <h1>{el.name}</h1>
          <img src={el.image} alt={el.name} />
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default Home;
