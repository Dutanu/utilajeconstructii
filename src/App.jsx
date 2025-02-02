import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import EquipmentFilter from "./components/EquipementFilter.jsx";
import Services from "./components/Services.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/equipment/:equipmentType" element={<EquipmentFilter />} />
            </Routes>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;