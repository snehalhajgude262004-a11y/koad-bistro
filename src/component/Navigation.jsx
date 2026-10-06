import React from "react";
import "./Navigation.css";

const Navigation = (props) => {
    const navItems = [
        ["Home", "#home"],
        ["Menu", "#menu"],
        ["Reservation", "#reservation"],
        ["News", "#news"],
        ["Contact", "#contact"]
    ];

    return (
        <header className="container-fluid site-header" id="home">
            <div className="d-lg-none nav-mobile">
                <img src={props.logo} alt="Koad Bistro logo" />
                <button className="mobile-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-controls="mobileNav" aria-label="Open navigation">
                    <i className="bi bi-list"></i>
                </button>
            </div>

            <div className="d-none d-lg-block">
                <div className="container nav-desktop">
                    <img src={props.logo} alt="Koad Bistro logo" />
                    <nav aria-label="Main navigation">
                        <ul>
                            {navItems.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
                        </ul>
                    </nav>
                    <a className="nav-book-btn" href="#reservation">{props.navBtn}</a>
                </div>
            </div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileNav" aria-labelledby="mobileNavTitle">
                <div className="offcanvas-header">
                    <h5 id="mobileNavTitle">Koad Bistro</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav aria-label="Mobile navigation">
                        {navItems.map(([label, href]) => <a key={label} href={href} data-bs-dismiss="offcanvas">{label}</a>)}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
