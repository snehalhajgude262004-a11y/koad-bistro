import React from "react";
import "./PopularDish.css";

const PopularDish = (props) => {
    return (
        <section className="container-fluid popular-sec" id="menu">
            <div className="container">
                <h2>{props.popularheadings}</h2>
                <h5>{props.populartheme}</h5>
                <div className="row">
                    {props.populardata.map((dish, index) => (
                        <figure key={index} className="popular-div1 col-12 col-md-6 col-lg-4">
                            <img src={dish.DishImg} alt={dish.Dishheading} loading="lazy" />
                            <figcaption>
                                <h3>{dish.Dishheading}</h3>
                                <p>{dish.Dishparagraph}</p>
                                <h4>{dish.DishPrice}</h4>
                                <button type="button" className="dish-action" onClick={() => props.onAddToCart?.(dish)}>
                                    {dish.Dishbtn}
                                </button>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDish;
