// components/Services.js
import React from 'react';
import './Services.css';

function Services() {
    return (
        <section className="services" id="servicii">
            <div className="container">
                <h2>Serviciile noastre</h2>
                <div className="services-grid">
                    <div className="service-card__vanzari">
                        <h2>Inchirieri</h2>
                    </div>
                    <div className="service-card__inchirieri">
                        <h2>Vanzari</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;