import React from 'react'
import '../styles/Contact.css';
import Footer from '../Footer';
import Form from '../Form';

function Contact() {
    return (
        <>
            <div className = "contact">
                <h1>Contact me</h1>
            </div>
            <div>
                <Form />
            </div>

            <Footer />
        </>
    )
}

export default Contact
