import React from "react";
import "./HeroSection.css"
import { Carousel } from "bootstrap";

const HeroSection = (props) => {
    return (
        <section className="container-fluid hero-sec">
            <div>
                <h1>{props.heroheading}</h1>
                <p>{props.heroparagraph}</p>
                <nav>
                    <a href="#menu">{props.herobtn}</a>
                </nav>
            </div>
        </section>
    );
}

export default HeroSection;

