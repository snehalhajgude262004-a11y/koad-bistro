import React from "react";
import "./Services.css"

const Services = (props) => {
    return (
        <section className="container service">
            <div className="row">
                {props.ServicesData.map((servicedata, index) => (
                    <figure key={index} className="service-sec col-12 col-md-6 col-lg-3">
                        <img src={servicedata.ServiceImg} alt="food" />
                        <figcaption>
                            <h3>{servicedata.ServiceHeading}</h3>
                            <p>{servicedata.ServiceParagraph}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default Services;