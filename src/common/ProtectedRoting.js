import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

function ProtectedRoute({ component }) {
  const [loggedInUser, setloggedInUser] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    setloggedInUser(data);
  }, [window.location.pathname]);

  if (!loggedInUser) {
    redirect("/login");
  }

  return component;
}

export default ProtectedRoute;
