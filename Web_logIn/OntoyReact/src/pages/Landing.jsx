import React from 'react';
import './css/landing.css'; // Make sure to create a corresponding CSS file for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <div className="landing">
            <Navbar />
            <header className='hero-section'>
                <div className='chart-hero'>
                <h1>¡Bienvenido a OnToy!</h1>
                <p>La mejor plataforma para saber dónde estás en ESCOM</p>     
                </div>
            </header>
            <Footer />
        </div>
    );
};

export default Landing;