import React from "react";
import "./Review.css";

const Review = (props) => {
    return (
        <section className="container-fluid review-sec">
            <div className="container">
                <div className="row">
                    <div className="review-div1">
                        <h3>{props.reviewmain}</h3>
                        <p>{props.reviewparagraphs}</p>
                    </div>
                    <div className="row">
                        {props.reviewdata.map((reviewdata, index) => (
                        <figure key={index} className=" col-12 col-md-4 col-lg-4 review-deatils">
                            <img src={reviewdata.reviewppicture} alt="" />
                            <figcaption>
                                <h4>{reviewdata.reviewname}</h4>
                                <h5>{reviewdata.reviewrole}</h5>
                                <div className="lines"></div>
                                <p>{reviewdata.reviewpara}</p>
                            </figcaption>
                        </figure>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;


