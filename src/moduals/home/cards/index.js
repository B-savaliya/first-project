import React  from "react";
import "./cards.scss"
import Burger from "../../../assests/images/Burger.jpg"
import img2 from "../../../assests/images/sandwhich.jpeg"
import img3 from "../../../assests/images/classic-cheese-pizza.jpg"
import img4 from "../../../assests/images/chole.jpeg"
import img5 from "../../../assests/images/Dhosapizza.webp"
import img6 from "../../../assests/images/franki.jpeg"
import img7 from "../../../assests/images/jalebifafada.jpeg"
import img8 from "../../../assests/images/momos.jpeg"
export default function Cards(){
    return(
        <div className="cards">
            <h4>Most Searcheed Food</h4>
            <div className="cards-grid">
                <div className="card">
                    <div className="card-img">
                        <img src={Burger}/>
                        <div className="card-menu-price">$56</div>
                    </div>
                    <div className="card-detail">
                        <h5> Crispy Burger</h5>
                        <p>#52</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img2}/>
                        <div className="card-menu-price">$60</div>
                    </div>
                    <div className="card-detail">
                        <h5>Sandwhich</h5>
                        <p>#45</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img3}/>
                        <div className="card-menu-price">$45</div>
                    </div>
                    <div className="card-detail">
                        <h5> Chessy Pizza</h5>
                        <p>#40</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img4}/>
                        <div className="card-menu-price">$25</div>
                    </div>
                    <div className="card-detail">
                        <h5> Chole Bhature</h5>
                        <p>#50</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img5}/>
                        <div className="card-menu-price">$64</div>
                    </div>
                    <div className="card-detail">
                        <h5> Pizza Dhosa</h5>
                        <p>#84</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img6}/>
                        <div className="card-menu-price">$85</div>
                    </div>
                    <div className="card-detail">
                        <h5> Franki</h5>
                        <p>#63</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img7}/>
                        <div className="card-menu-price">$74</div>
                    </div>
                    <div className="card-detail">
                        <h5>Jalebi Fafda</h5>
                        <p>#57</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={img8}/>
                        <div className="card-menu-price">$95</div>
                    </div>
                    <div className="card-detail">
                        <h5>Steam Momos</h5>
                        <p>#20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}