import React from "react";
import Button from "../../common/components/button";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      This is home page
      {/* <Link to={"/blog"}> */}
      <Button color={"red"} title={"red button"} class={"redButton"} />
      <Button class={"pinkButton"} />
      <Button color={"pink"} title={"pink button"} />
      <button onClick={() => navigate("/blog")}>click</button>
      <button onClick={() => navigate("/")}>go to home</button>
      {/* </Link> */}
      <Outlet />
    </div>
  );
}

export default Home;
