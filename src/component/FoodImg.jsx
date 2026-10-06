import React from "react";
import "./FoodImg.css";

const FoodImg = (props) => {
    return (
        <section className="container-fluid food-div">
            <div className="row p-0">
                <div className="food">
                    {props.imgdata.map((imgdata, index) => (
                        <img key={index} src={imgdata.foodimg} alt="" className="col-6 col-md-6 col-lg-3 " />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FoodImg;
