import React from "react";
import "./HamBurger.css";

const HamBurger = (props) => {
    const addSpecial = () => props.onAddToCart?.({ Dishheading: props.hamburgerheading, DishPrice: props.hamburgerprice });

    return (
        <section className="container-fluid hamburger-sec">
            <div className="hamburger-div">
                <p>{props.hamburgerparagraph}</p>
                <h2>{props.hamburgerheading}</h2>
                <h3>{props.hamburgerprice}</h3>
                <button type="button" onClick={addSpecial}>{props.hamburgerbtn}</button>
            </div>
        </section>
    );
};

export default HamBurger;
