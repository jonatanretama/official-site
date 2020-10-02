import React from 'react';
import './styles/Footer.css';
import FooterIcons from './FooterIcons';

function Footer() {
    return (
        <div className = "footer-container">
            <section className = "footer-section">
                <h1>Follow me <i className="far fa-hand-peace"></i></h1>
                <p className = "footer-description">
                You can find me in the following links by clicking on the icon of your interest.
                </p>                
            </section>
            <FooterIcons />
        </div>
    )
}

export default Footer
