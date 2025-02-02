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
                    <a href="https://wa.me/40712345678?text=Salut!%20Am%20o%20întrebare."
                       target="_blank"
                       className="btn">
                        +40 723 534 435
                    </a>
                </div>
            </section>
            <Services/>
        </div>
    );
}

export default Hero;