import React  from "react";
import"./oredernotifiction.scss";
import Notifivationdp from "../../../assests/images/profiledp.jpeg";
import Notifivationclose from "../../../assests/icons/filter-close.svg";
import Notifivationdpone from "../../../assests/images/img2.jpeg";
import Notifivationdptwo from "../../../assests/images/img4.jpeg";
import Notifivationdpthree from "../../../assests/images/img5.jpeg";
import Notifivationdpfour from "../../../assests/images/img6.jpeg";
import Notifivationdpfive from "../../../assests/images/img7.jpeg";
export default function Oredernotifiction(){
    return(
        <div className="oredernotifiction">
            <div className="oredernotifiction-one">
                <div className="oredernotifiction-one-first-child">
                    <div className="oredernotifiction-one-first-child-img">
                        <img src={Notifivationdp}/>
                        <p>John</p>
                    </div>
                    <div className="oredernotifiction-one-first-child-close">
                        <img src={Notifivationclose}/>     
                    </div>
                </div>
                <div className="oredernotifiction-one-last-child">
                    <h5>Order : Pizza</h5>
                    <div className="oredernotifiction-one-last-child-second-detail">
                        <p>Quantity : 2</p>
                        <span>Clike Hear To Addresh </span>
                    </div>
                </div>
            </div>
            <div className="oredernotifiction-one">
                <div className="oredernotifiction-one-first-child">
                    <div className="oredernotifiction-one-first-child-img">
                        <img src={Notifivationdptwo}/>
                        <p>don</p>
                    </div>
                    <div className="oredernotifiction-one-first-child-close">
                        <img src={Notifivationclose}/>     
                    </div>
                </div>
                <div className="oredernotifiction-one-last-child">
                    <h5>Order : Burger</h5>
                    <div className="oredernotifiction-one-last-child-second-detail">
                        <p>Quantity : 21</p>
                        <span>Clike Hear To Addresh </span>
                    </div>
                </div>
            </div>
            <div className="oredernotifiction-one">
                <div className="oredernotifiction-one-first-child">
                    <div className="oredernotifiction-one-first-child-img">
                        <img src={Notifivationdpthree}/>
                        <p>wick</p>
                    </div>
                    <div className="oredernotifiction-one-first-child-close">
                        <img src={Notifivationclose}/>     
                    </div>
                </div>
                <div className="oredernotifiction-one-last-child">
                    <h5>Order : Frenki</h5>
                    <div className="oredernotifiction-one-last-child-second-detail">
                        <p>Quantity : 10</p>
                        <span>Clike Hear To Addresh </span>
                    </div>
                </div>
            </div>
            <div className="oredernotifiction-one">
                <div className="oredernotifiction-one-first-child">
                    <div className="oredernotifiction-one-first-child-img">
                        <img src={Notifivationdpfour}/>
                        <p>Caption</p>
                    </div>
                    <div className="oredernotifiction-one-first-child-close">
                        <img src={Notifivationclose}/>     
                    </div>
                </div>
                <div className="oredernotifiction-one-last-child">
                    <h5>Order : Momos</h5>
                    <div className="oredernotifiction-one-last-child-second-detail">
                        <p>Quantity : 6</p>
                        <span>Clike Hear To Addresh </span>
                    </div>
                </div>
            </div>
            <div className="oredernotifiction-one">
                <div className="oredernotifiction-one-first-child">
                    <div className="oredernotifiction-one-first-child-img">
                        <img src={Notifivationdpfive}/>
                        <p>Marvel</p>
                    </div>
                    <div className="oredernotifiction-one-first-child-close">
                        <img src={Notifivationclose}/>     
                    </div>
                </div>
                <div className="oredernotifiction-one-last-child">
                    <h5>Order : Dhosa</h5>
                    <div className="oredernotifiction-one-last-child-second-detail">
                        <p>Quantity : 7</p>
                        <span>Clike Hear To Addresh </span>
                    </div>
                </div>
            </div>
            <div className="oredernotifiction-one">
                <div className="oredernotifiction-one-first-child">
                    <div className="oredernotifiction-one-first-child-img">
                        <img src={Notifivationdp}/>
                        <p>Black Widow</p>
                    </div>
                    <div className="oredernotifiction-one-first-child-close">
                        <img src={Notifivationclose}/>     
                    </div>
                </div>
                <div className="oredernotifiction-one-last-child">
                    <h5>Order : Pizza</h5>
                    <div className="oredernotifiction-one-last-child-second-detail">
                        <p>Quantity : 2</p>
                        <span>Clike Hear To Addresh </span>
                    </div>
                </div>
            </div>
        </div>
    )
}