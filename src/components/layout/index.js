import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        {children}
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
