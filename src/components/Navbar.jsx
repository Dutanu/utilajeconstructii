// components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">Edy Grup</div>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Acasă</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/vanzare" className="nav-link">Vanzare</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/inchiriere" className="nav-link">Inchiriere</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;