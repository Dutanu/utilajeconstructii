// components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>Contact</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Nume" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Mesaj" required></textarea>
                    <button type="submit">Trimite</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;