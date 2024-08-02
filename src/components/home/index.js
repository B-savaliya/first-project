import React, { useEffect, useState } from "react";
import Button from "../../common/components/button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/reducers/counterSlice";

const INCREMENT = "incement";
const DECREMENT = "decrement";

// useSelector
// useDispatch

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState({ state: INCREMENT, num: 0 });
  const [recipes, setRecipes] = useState([]);
  const counter = useSelector((store) => store.counter.value);
  console.log("states********", counter);

  useEffect(() => {
    setRecipes([]);
    getRecipes();
    return () => {
      setRecipes([]);
    };
  }, [count]);

  const getRecipes = () => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRecipes(res.recipes);
      });
  };

  const handleClick = () => {
    dispatch(increment(4));
  };

  return (
    <div>
      {/* {console.log("*******", count)} */}
      <h1>This is home page, the count is: {counter}</h1>
      <br />
      {/* <Link to={"/blog"}> */}
      <Button
        color={"red"}
        title={"red button"}
        class={"redButton"}
        onClick={handleClick}
      />
      <Button
        class={"pinkButton"}
        onClick={() =>
          setCount(
            count.state === INCREMENT
              ? { state: DECREMENT, num: count.num + 1 }
              : { state: INCREMENT, num: count.num - 1 }
          )
        }
      />
      <Button color={"pink"} title={"pink button"} onClick={getRecipes} />
      <button onClick={() => navigate("/blog")}>click</button>
      <button onClick={() => navigate("/")}>go to home</button>
      {/* </Link> */}
      {/* {console.log("********", recipes)} */}
      {/* {recipes.map((el) => (
        <div>
          <h1>{el.name}</h1>
          <img src={el.image} alt={el.name} />
        </div>
      ))} */}
      <Outlet />
    </div>
  );
}

export default Home;
