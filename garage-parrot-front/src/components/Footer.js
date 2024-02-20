import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contactez-nous</h5>
                        <div className="badge contact-info">
                            <FontAwesomeIcon icon={faPhone} /> 01 23 45 67 89
                        </div>
                        <div className="badge contact-info">
                            <FontAwesomeIcon icon={faEnvelope} /> contact@vparrotgarage.com
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Horaires d'ouverture</h5>
                        <div className="badge opening-hours">Lundi - Vendredi : 8h - 18h</div>
                        <div className="badge opening-hours">Samedi : 9h - 12h</div>
                    </div>
                    <div className="col-md-4 w-100">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center  d-flex justify-content-around" >
                        <a href="/contact" className="footer-cta">Contact</a>
                        <a href="/vehicles" className="footer-cta">occasion</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
