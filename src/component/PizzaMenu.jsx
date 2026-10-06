import React from "react";
import "./PizzaMenu.css";

const PizzaMenu = (props) => {
    return (
        <section className="container-fluid pizza-sec">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 ">
                    <img className="pizzaimg" src={props.pizzaimg} alt="pizza" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 pizzas">
                    <h3>{props.pizzaheading}</h3>
                    <div className="lines"></div>
                    {props.pizzadata.map((pizzadata, index) => (
                        <figure key={index} className="pizza-div">
                            <img src={pizzadata.pizzafigure} alt="food" />
                            <figcaption className="row">
                                <h4 className="col-6">{pizzadata.pizzaname}</h4>
                                <h5 className="col-6">{pizzadata.pizzaprice}</h5>
                                <p>{pizzadata.pizzapara}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PizzaMenu;