import React from "react";
import Slider from "react-slick";
import "./dashboardslider.scss";
import Gujrati from "../../../assests/images/Gujarati.avif";
import Punjabi from "../../../assests/images/punjabi.jpeg";
import Southindian from "../../../assests/images/southidian.jpeg";
import Pavbhaji from "../../../assests/images/Pav-Bhaji-Mumbai.webp";
import BIrayani from "../../../assests/images/birayani.webp";
export default function Dashboardslider() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="dashboardslider-none">
                <div className="dashboardslider-one">
                    <div className="dashboardslider-one-img">
                        <img src={Gujrati} />
                        <div className="dashboardslider-one-img-name">
                            Gujarati
                        </div>
                    </div>
                    <div className="dashboardslider-one-detail">
                        <div className="dashboardslider-one-box box-one">
                            <h3>Today’s Order</h3>
                            <p>200</p>
                            <span>10.00% (1 days)</span>
                        </div>
                        <div className="dashboardslider-one-box box-two">
                            <h3>Totle Order</h3>
                            <p>4006</p>
                            <span>10.00% (30 days)</span>
                        </div>
                        <div className="dashboardslider-one-box box-three">
                            <h3>Pending Order Today’s</h3>
                            <p>16</p>
                            <span>10.00% (1 days)</span>
                        </div>
                        <div className="dashboardslider-one-box box-four">
                            <h3>Order Serverd</h3>
                            <p>3922</p>
                            <span>10.00% (30 days)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboardslider">
                <Slider {...settings}>
                    <div>
                        <div className="dashboardslider-one">
                            <div className="dashboardslider-one-img">
                                <img src={Gujrati} />
                                <div className="dashboardslider-one-img-name">
                                    Gujarati
                                </div>
                            </div>
                            <div className="dashboardslider-one-detail">
                                <div className="dashboardslider-one-box box-one">
                                    <h3>Today’s Order</h3>
                                    <p>200</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-two">
                                    <h3>Totle Order</h3>
                                    <p>4006</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-three">
                                    <h3>Pending Order Today’s</h3>
                                    <p>16</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-four">
                                    <h3>Order Serverd</h3>
                                    <p>3922</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dashboardslider-one">
                            <div className="dashboardslider-one-img">
                                <img src={Gujrati} />
                                <div className="dashboardslider-one-img-name">
                                    Punjabi
                                </div>
                            </div>
                            <div className="dashboardslider-one-detail">
                                <div className="dashboardslider-one-box box-one">
                                    <h3>Today’s Order</h3>
                                    <p>200</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-two">
                                    <h3>Totle Order</h3>
                                    <p>4006</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-three">
                                    <h3>Pending Order Today’s</h3>
                                    <p>16</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-four">
                                    <h3>Order Serverd</h3>
                                    <p>3922</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dashboardslider-one">
                            <div className="dashboardslider-one-img">
                                <img src={Gujrati} />
                                <div className="dashboardslider-one-img-name">
                                    Southindian
                                </div>
                            </div>
                            <div className="dashboardslider-one-detail">
                                <div className="dashboardslider-one-box box-one">
                                    <h3>Today’s Order</h3>
                                    <p>200</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-two">
                                    <h3>Totle Order</h3>
                                    <p>4006</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-three">
                                    <h3>Pending Order Today’s</h3>
                                    <p>16</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-four">
                                    <h3>Order Serverd</h3>
                                    <p>3922</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dashboardslider-one">
                            <div className="dashboardslider-one-img">
                                <img src={Gujrati} />
                                <div className="dashboardslider-one-img-name">
                                    Maharashtrian
                                </div>
                            </div>
                            <div className="dashboardslider-one-detail">
                                <div className="dashboardslider-one-box box-one">
                                    <h3>Today’s Order</h3>
                                    <p>200</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-two">
                                    <h3>Totle Order</h3>
                                    <p>4006</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-three">
                                    <h3>Pending Order Today’s</h3>
                                    <p>16</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-four">
                                    <h3>Order Serverd</h3>
                                    <p>3922</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dashboardslider-one">
                            <div className="dashboardslider-one-img">
                                <img src={Gujrati} />
                                <div className="dashboardslider-one-img-name">
                                    Haidrabadi
                                </div>
                            </div>
                            <div className="dashboardslider-one-detail">
                                <div className="dashboardslider-one-box box-one">
                                    <h3>Today’s Order</h3>
                                    <p>200</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-two">
                                    <h3>Totle Order</h3>
                                    <p>4006</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-three">
                                    <h3>Pending Order Today’s</h3>
                                    <p>16</p>
                                    <span>10.00% (1 days)</span>
                                </div>
                                <div className="dashboardslider-one-box box-four">
                                    <h3>Order Serverd</h3>
                                    <p>3922</p>
                                    <span>10.00% (30 days)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}
