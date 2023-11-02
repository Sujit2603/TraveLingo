import React from "react";
import "./ContactForm.css"

function ContactForm() {
    return (
        <>
            <sec>
                <div className="container">
                    <div className="contactInfo">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><i className="fa-solid fa-location-dot"></i></span>
                                    <span className="ran">
                                        Acropolis Institute Of Technology And Research
                                        Indore
                                    </span>
                                </li>
                                <li>
                                    <span><i className="fa-regular fa-envelope"></i></span>
                                    <span>
                                        sujeetbulbake210475@acropolis.in
                                    </span>
                                </li>
                                <li>
                                    <span><i className="fa-solid fa-phone-volume"></i></span>
                                    <span>
                                        9669138190
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <ul className="sci">
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div className="contactForm">
                        <h2>Send Message</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" required />
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="number" required />
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea required></textarea>
                                <span>Write your Message Here....</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </sec>
        </>

    )
}

export default ContactForm;