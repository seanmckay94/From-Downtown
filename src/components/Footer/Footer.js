import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    
    return (
        <div className="footer-container">
            <div className="footer-header">
                <h2 className="footer-head-text">"Easy as making a free throw"</h2>
                <p className="footer-text">Developed by Sean McKay</p>
            </div>
            <div className="footer-icons">
                <a href="https://github.com/seanmckay94" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={ faGithub } size="2x" className="icon" />
                </a>
                <FontAwesomeIcon icon={ faLinkedin } size="2x" className="icon" />
                <a href="mailto:swmckay94.com?Subject=From Downtown" >
                <FontAwesomeIcon icon={ faEnvelope } size="2x" className="icon" />
                </a>
            </div>
        </div>
    )
}