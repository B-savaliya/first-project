import React from "react";
import "./header.scss";
import Mobilemenu from "../../../assests/icons/mobile-menu.svg"
import Headerdp from "../../../assests/logos/bird-colorful.avif"
export default function Header(){
    return(
        <header>
            <div className="header-items">
                <div className="header-menuicon">
                    <img src={Mobilemenu}/>
                </div>
                <div className="header-last-chail">
                    <a href="/login"><button>Login</button></a>
                    <div className="header-dp">
                        <img src={Headerdp}/>
                    </div>
                </div>
            </div>
        </header>
    )
}