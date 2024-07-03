import React  from "react";
import Sidemenu from "../../shared/components/sidemenu";
import "./notification.scss"
import Oredernotifiction from "./ordernotificatio";
import { Outlet } from "react-router-dom";
export default function Notification(){
    return(
        <div className="notification">
            <div className="notification-right-grid">
                <div className="notification-title">
                    <h2>Notification</h2>
                </div>
                <Oredernotifiction/>
                <Outlet/>
            </div>
        </div>
    )
}