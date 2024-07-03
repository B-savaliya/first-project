import React from "react";
import Header from "../header";
import Sidemenu from "../sidemenu";
import { Outlet } from "react-router-dom";
import "./layout.scss"
export default function Layout() {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="position">
                    <div className="sticky">
                        <Sidemenu />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
