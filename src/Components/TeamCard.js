import React from 'react';
import './TeamCard.css';

function TeamCard() {
    let message = `This is Simple Text Message`;

    return (
        <>
            <section className="section-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">The Team Behind This Minor Project</h2>
                            <p className="section-subtitle">{message}</p>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="team-img" alt="Shubham Patidar"></img>
                                <h3>SHUBHAM PATIDAR</h3>
                                <div className="team-info">
                                    <p>Team Leader</p>
                                    <p>As the guiding force at Travellingo, our Team Leader orchestrates seamless adventures, turning dreams into unforgettable experiences with expertise, inspiration, and leadership prowess.</p>

                                    <ul className="team-icon">
                                        <li>
                                            <a href="#" className="twitter">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="team-img" alt="Shrikant Mishra"></img>
                                <h3>SHRIKANT MISHRA</h3>
                                <div className="team-info">
                                    <p>Team Member</p>
                                    <p>Shrikant Mishra, the creative force behind Travellingo's project presentations and synopses, adds a touch of artistry, precision, and expertise, enhancing project narratives with finesse.</p>

                                    <ul className="team-icon">
                                        <li>
                                            <a href="#" className="twitter">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="team-img" alt="Sameer Tyagi"></img>
                                <h3>SAMEER TYAGI</h3>
                                <div className="team-info">
                                    <p>Team Member</p>
                                    <p>Sameer Tyagi, our meticulous Project Report Specialist at Travellingo, ensures project excellence through detailed reports, contributing expertise and dedication seamlessly.</p>

                                    <ul className="team-icon">
                                        <li>
                                            <a href="#" className="twitter">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* New Card for Sujeet Bulbake */}
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="team-img" alt="Sujeet Bulbake"></img>
                                <h3>SUJEET BULBAKE</h3>
                                <div className="team-info">
                                    <p>Team Member</p>
                                    <p>Sujeet Bulbake, our dedicated team member at Travellingo, contributes expertise to ensure project success with commitment and diligence.</p>

                                    <ul className="team-icon">
                                        <li>
                                            <a href="#" className="twitter">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="linkedin">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamCard;
