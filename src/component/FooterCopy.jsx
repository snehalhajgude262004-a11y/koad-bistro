import React from "react";
import "./FooterCopy.css";

const FooterCopy = (props) => {
    return (
        <section className="container-fluid footertop-div">
            <div className="footercopy1">
                <p>{props.footercopy1}</p>
                <nav>
                    <a href="#home">{props.footertop1}</a>
                </nav>
            </div>
        </section>
    )
}

export default FooterCopy;