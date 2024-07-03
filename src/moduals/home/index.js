import React from "react";
import "./home.scss"
import Dashboardslider from "./dashboardslider";
import Cards from "./cards";
import Ordertable from "./ordertable";
import Footer from "../../shared/components/footer";
import { Outlet } from "react-router-dom";
export default function Home(){
    return(
        <>
        <div className="Home">
            <div className="home-right-grid">
                <div className="home-title">
                    <h1>Dashboard</h1>
                </div>
                <Dashboardslider/>
                <Cards/>
                <Ordertable/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
        </>
    )
}