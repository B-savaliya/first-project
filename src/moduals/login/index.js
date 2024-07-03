import React from "react";
import "./login.scss";
import { Outlet } from "react-router-dom";
export default function Login() {
    return (
        <div className="login">
            <div className="login-items">
                <div className="login-heading">
                    <h2>Login</h2>
                </div>
                <div class="did-input-items">
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
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" />
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
                        <div className="forgot">
                            <p>Forgot Password?</p>
                        </div>
                    </div>
                    <div className="dont-have-accont">
                        <p>
                            Don't have account <a href="/signin">Sign'in</a>
                        </p>
                    </div>
                    <div className="lodin-btn">
                        <a href="/"><button>
                            Login
                        </button></a>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
