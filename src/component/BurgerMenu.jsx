import React from "react";
import "./BurgerMenu.css";

const BurgerMenu = (props) => {
    return (
        <section className="container-fluid burger-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <img src={props.burgerimg2} alt="burger"className="burgerimg2" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 burger-head">
                        <h3>{props.burgerheading2}</h3>
                        <div className="lines"></div>
                        {props.burgerdata.map((burgerdata, index) => (
                            <figure key={index} className="burger-div">
                                <img src={burgerdata.burgerfigure2} alt="burger" className="burgerfigure" />
                                <figcaption className="row">
                                    <h4 className="col-6">{burgerdata.burgername2}</h4>
                                    <h5 className="col-6">{burgerdata.burgerprice2}</h5>
                                    <p>{burgerdata.burgerpara}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BurgerMenu;
