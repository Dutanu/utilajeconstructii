// components/About.js
import React from 'react';
import './About.css';
import { useNavigate } from "react-router-dom";
import wheelimg from '../assets/images/wheel-loader.jpeg';
import miniexcimg from '../assets/images/miniexcavator.jpeg';
import excavatorimg from '../assets/images/excavator.jpeg';
import dozerimg from '../assets/images/dozer.jpeg';
import graderimg from '../assets/images/grader.jpeg';

function About() {
    const equipmentList = [
        { type: 'wheel-loader', label: 'Wheel Loader', image: wheelimg },
        { type: 'skid-steer-loaders', label: 'Skid Steer Loaders', image: miniexcimg },
        { type: 'excavator', label: 'Excavator', image: excavatorimg },
        { type: 'mini-excavator', label: 'Mini Excavator', image: miniexcimg },
        { type: 'dozer', label: 'Dozer', image: dozerimg },
        { type: 'grader', label: 'Grader', image: graderimg },
    ];

    const navigate = useNavigate();

    return (
        <div className="equipment-grid">
            {equipmentList.map((item) => (
                <div
                    key={item.type}
                    className="equipment-item"
                    onClick={() => navigate(`/equipment/${item.type}`)}
                >
                    <img src={item.image} alt={item.label} />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    );
}

export default About;