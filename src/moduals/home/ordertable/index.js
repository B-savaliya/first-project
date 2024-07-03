import React from "react";
import "./ordertable.scss"
import tableimg3 from "../../../assests/images/classic-cheese-pizza.jpg"
import tableimg4 from "../../../assests/images/chole.jpeg"
import tableimg5 from "../../../assests/images/Dhosapizza.webp"
import tableimg6 from "../../../assests/images/franki.jpeg"
export default function Ordertable(){
    return(
        <div className="ordertable">
            <h4>Recent Online Order</h4>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Customer</th>
                        <th>Food</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-row">
                        <td>#23445</td>
                        <td>Anynomouse</td>
                        <td>
                            <div className="table-img">
                                <img src={tableimg3}/>
                                <p>Pizza</p>
                            </div>
                        </td>
                        <td>9897762622</td>
                        <td>panding</td>
                        <td>
                            <div className="table-status">
                                <div className="accept"><p>accept</p></div>
                                <div className="decline"><p>decline</p></div>
                            </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>#23453</td>
                        <td>Anynomouse</td>
                        <td>
                            <div className="table-img">
                                <img src={tableimg4}/>
                                <p>Chole</p>
                            </div>
                        </td>
                        <td>9897762622</td>
                        <td>accept</td>
                        <td>
                            <div className="table-status">
                                <div className="accept"><p>accept</p></div>
                                <div className="decline"><p>decline</p></div>
                            </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>#54344</td>
                        <td>Anynomouse</td>
                        <td>
                            <div className="table-img">
                                <img src={tableimg5}/>
                                <p>Dhosa</p>
                            </div>
                        </td>
                        <td>9897762622</td>
                        <td>panding</td>
                        <td>
                            <div className="table-status">
                                <div className="accept"><p>accept</p></div>
                                <div className="decline"><p>decline</p></div>
                            </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>#29375</td>
                        <td>Anynomouse</td>
                        <td>
                            <div className="table-img">
                                <img src={tableimg6}/>
                                <p>Frenki</p>
                            </div>
                        </td>
                        <td>9897762622</td>
                        <td>panding</td>
                        <td>
                            <div className="table-status">
                                <div className="accept"><p>accept</p></div>
                                <div className="decline"><p>decline</p></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}