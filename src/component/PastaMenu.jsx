import React from "react";
import "./PastaMenu.css";

const PastaMenu = (props) => {
    return (
        <section className=" pasta-sec container-fluid pasta-sec">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 pasta-head">
                        <h3>{props.pastaheading1}</h3>
                        <div className="lines"></div>
                        {props.pastadata.map((pastadata, index) => (
                            <figure key={index} className="pasta-div">
                                <img src={pastadata.pastafigure1} alt="" className="pastafigure1"/>
                                <figcaption className="row">
                                    <h4 className="col-6">{pastadata.pastaname1}</h4>
                                    <h5 className="col-6">{pastadata.pastaprice1}</h5>
                                    <p>{pastadata.pastapara1}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={props.pastaimg1} alt="pasta" className="pastaimg1" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default PastaMenu;