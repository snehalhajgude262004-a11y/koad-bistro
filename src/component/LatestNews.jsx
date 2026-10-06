import React from "react";
import "./LatestNews.css";

const LatestNews = (props) => {
    return (
        <section className="container-fluid news-sec" id="news">
            <div className="container">
                <h3>{props.newsheading}</h3>
                <h5>{props.newstitle}</h5>
                <div className="row">
                    {props.newsdata.map((newsdata, index) => (
                        <figure key={index} className="col-12 col-md-6 col-lg-4 news-div">
                            <img src={newsdata.newsphoto} alt="" />
                            <figcaption className="news-detail">
                                <h4>{newsdata.newsdetail1}</h4>
                                <p>{newsdata.newsparagraphs}</p>
                                <div className="lines2"></div>
                                <p>{newsdata.newsdate}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <nav className="newsanchor">
                    <a href="#news">{props.newsanchor}</a>
                </nav>
            </div>
        </section>
    );
}

export default LatestNews;