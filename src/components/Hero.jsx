// components/Hero.js
import React from 'react';
import './Hero.css';
import Services from "./Services.jsx";

function Hero() {
    return (
        <div>
            <section className="hero" id="home">
                <div className="hero-content">
                    <h1>EdyGrup</h1>
                    <p>Vanzari si inchirieri utilaje constructii</p>
                    <a href="#contact" className="btn">+40 723 534 435</a>
                </div>
            </section>
            <Services/>
        </div>
    );
}

export default Hero;