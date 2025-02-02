// components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} EdyGrup. Toate drepturile rezervate.</p>
                <iframe
                    title="Sediu"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.967455207156!2d26.5846433763307!3d47.23678247115827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473536e708c3f009%3A0x8a246c06e6600991!2sVulcanizare%20non%20stop!5e0!3m2!1sen!2sro!4v1738503256279!5m2!1sen!2sro"
                    width="200"
                    height="100"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <p>judet Iasi, comuna Motca, +40 723 534 435 </p>
            </div>

        </footer>
    );
}

export default Footer;