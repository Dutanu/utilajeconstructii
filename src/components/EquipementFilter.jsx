// components/EquipmentFilter.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './EquipmentFilter.css';
import wheelimg from '../assets/images/wheel-loader.jpeg';
import miniexcimg from '../assets/images/miniexcavator.jpeg';
import excavatorimg from '../assets/images/excavator.jpeg';
import dozerimg from '../assets/images/dozer.jpeg';
import graderimg from '../assets/images/grader.jpeg';

// Exemplu de array cu toate echipamentele
const allEquipment = [
    { id: 1, type: 'wheel-loader', name: 'Wheel Loader Model A', image: wheelimg, descriptionTitle: 'Excavator JCB', an: '2009', condition: 'Conditii 90%'  },
    { id: 2, type: 'wheel-loader', name: 'Wheel Loader Model B', image: '/images/wheel-loader.png', descriptionTitle: 'MiniExcavator' },
    { id: 3, type: 'skid-steer-loaders', name: 'Skid Steer Loader Model A', image: miniexcimg },
    { id: 4, type: 'excavator', name: 'Excavator Model A', image: excavatorimg },
    { id: 5, type: 'mini-excavator', name: 'Mini Excavator Model A', image: '/images/mini-excavator.jpg' },
    { id: 6, type: 'dozer', name: 'Dozer Model A', image: dozerimg },
    { id: 7, type: 'grader', name: 'Grader Model A', image: graderimg },
    // adaugă alte echipamente după nevoie
];

function EquipmentFilter() {
    const { equipmentType } = useParams();


    const filteredEquipment = allEquipment.filter(
        (item) => item.type === equipmentType
    );

    return (
        <div className="equipment-filter">
            <h2>Lista</h2>
            {filteredEquipment.length > 0 ? (
                <div className="equipment-list">
                    {filteredEquipment.map((item) => (
                        <div key={item.id} className="equipment-item">
                            <img  src={item.image} alt={item.name} />
                            <div className="equipment-description">
                                <h2>{item.name}</h2>
                                <p>{item.condition}</p>
                                <p>Pret: 2000E</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nu s-au găsit echipamente de tipul "{equipmentType}"</p>
            )}
        </div>
    );
}

export default EquipmentFilter;