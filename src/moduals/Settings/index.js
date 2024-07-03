import React from "react";
import Settingdp from "../../assests/logos/bird-colorful.avif"
import Sidemenu from "../../shared/components/sidemenu";
import "./setting.scss";
import Footer from "../../shared/components/footer";
import { Outlet } from "react-router-dom";
export default function Setting(){
    return(
        <div className="settings">
            <div className="setting-right-grid">
                <div className="setting-title">
                    <h2>Settings</h2>
                </div>
                <div className="setting-details">
                   <div className="setting">
                        <div className="setting-profile-dp">
                            <img src={Settingdp}/>
                            <input type="file" />
                        </div>
                        <div className="setting-input-items">
                            <form>
                                <div className="inputs">
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <div>
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div>
                                        <label>Bio</label>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Bio"/>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div>
                                        <label>E-Mail</label>
                                    </div>
                                    <div>
                                        <input type="mail" placeholder="mail"/>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div>
                                        <label>Phone</label>
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Phone number"/>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div>
                                        <label>change Theme</label>
                                    </div>
                                    <div>
                                        <input type="password" placeholder="password"/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                            <div>
                                <button>Save & Submite</button>
                            </div>
                   </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}