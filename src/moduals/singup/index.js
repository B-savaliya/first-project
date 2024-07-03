import React from "react";
import "./signup.scss";
import { Outlet } from "react-router-dom";
export default function Signup() {
    return (
        <div className="sign">
            <div className="sign-items">
                <div className="sign-heading">
                    <h2>Creat-Account</h2>
                </div>
                <div class="did-input-items">
                    <div className="input-flex">
                        <div className="did-inputs">
                            <div>
                                <label>First Name</label>
                            </div>
                            <div>
                                <input type="text" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="did-inputs">
                            <div>
                                <label>Last Name</label>
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="did-inputs">
                        <div>
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input type="email" placeholder="E-mail" />
                        </div>
                    </div>
                    <div className="did-inputs">
                        <div>
                            <label>User Name</label>
                        </div>
                        <div>
                            <input type="text" placeholder="User Name" />
                        </div>
                    </div>
                    <div className="input-flex">
                        <div className="did-inputs">
                            <div>
                                <label>Password</label>
                            </div>
                            <div>
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="did-inputs">
                            <div>
                                <label>Confirm Password</label>
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-grid">
                        <div className="did-inputs">
                            <div>
                                <label>Phone No.</label>
                            </div>
                            <div>
                                <input
                                    type="telephone"
                                    placeholder="Phone No."
                                />
                            </div>
                        </div>
                        <div className="did-inputs">
                            <div>
                                <label>Otp</label>
                            </div>
                            <div>
                                <input
                                    type="telephone"
                                    placeholder="Otp"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="forgot-password">
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label for="vehicle1">Remember me</label>
                        </div>
                    </div>
                    <div className="lodin-btn">
                        <a href="/login"><button>Sign'in</button></a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
