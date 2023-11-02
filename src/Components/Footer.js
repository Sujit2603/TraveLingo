import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>Travellingo</p>
                <hr className="footer-hr" />
                <p className="footer-copyright">
                    Copyright &copy; 2023 Acropolis
                </p>
            </div>
        </footer>
    );
};

export default Footer;
