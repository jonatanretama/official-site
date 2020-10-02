import React from 'react';
import '../styles/About.css';
import Footer from '../Footer';
import AboutSection from '../AboutSection'


function About() {
    return (
        <>
            <div className = "about">
                <h1>About</h1>
                <img src="images/about/me1.jpg" alt="Avatar" className = "avatar" /> 
            </div>
            <AboutSection />
            <Footer />
        </>
    )
}

export default About
