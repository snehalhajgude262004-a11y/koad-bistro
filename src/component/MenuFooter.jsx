import React from "react";
import "./MenuFooter.css";

const MenuFooter = (props) => {
    return (
        <section className="container-fluid foot-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img src={props.footerlogo} alt="" className="footerlogo" />
                        <p className="footerparass">{props.footerparass}</p>
                        <div className="footericon">
                            {props.footericon.map((footericon, index) => (
                                <nav key={index}>
                                    <a href="#home" aria-label="Social media"><i className={footericon.footersymbol}></i></a>
                                </nav>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 footernews-div">
                        <h3 className="footernews">{props.footernews}</h3>
                        <p className="footerparass2">{props.footerparass2}</p>
                        <div className="subscribe-box">
                            <input type={props.footeremail} placeholder="enter your email" />
                            <button>{props.footerbtn}</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 footerfind-div">
                        <h4 className="footerfind">{props.footerfind}</h4>
                        <div className="footersign">
                            <a href="#contact" aria-label="Location"><i className={props.footersign}></i></a>
                            <p>{props.footerdatas}</p>
                        </div>
                        <div className="footersign">
                            <a href="tel:+09871933476" aria-label="Phone"><i className={props.footersign2}></i></a>
                            <p>{props.footerdatas2}</p>
                        </div>
                        <div className="footersign">
                            <a href="mailto:hello@koadbistro.example" aria-label="Email"><i className={props.footersign3}></i></a>
                            <p>{props.footerdatas3}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MenuFooter;