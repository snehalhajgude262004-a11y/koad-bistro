import React, { useState } from "react";
import "./Reservation.css";

const Reservation = (props) => {
    const [form, setForm] = useState({ name: "", email: "", date: "", time: "", guests: "2" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="container-fluid reserve-sec" id="reservation">
            <div className="reserve-div">
                <span className="section-kicker">RESERVE YOUR TABLE</span>
                <h3>{props.Reservationheading}</h3>
                <p>{props.Reservationparagraph}</p>
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" required />
                    <input name="date" type="date" value={form.date} onChange={handleChange} required />
                    <input name="time" type="time" value={form.time} onChange={handleChange} required />
                    <select name="guests" value={form.guests} onChange={handleChange} aria-label="Number of guests">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => <option key={guest} value={guest}>{guest} Guest{guest > 1 ? "s" : ""}</option>)}
                    </select>
                    <button type="submit">{props.Reservationbtn}</button>
                </form>
                {submitted && <div className="reservation-success" role="status">Thanks, {form.name}! Your table request has been received.</div>}
            </div>
        </section>
    );
};

export default Reservation;
