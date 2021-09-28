import React from 'react'
import "../style/Galeria.css";
import galeriaUno from '../images/galeriaUno.webp';
import galeriaDos from '../images/galeriaDos.webp';
import galeriaTres from '../images/galeriaTres.jpg';
import galeriaCuatro from '../images/galeriaCuatro.webp';
import galeriaCinco from '../images/galeriaCinco.webp';
import galeriaSeis from '../images/galeriaSeis.jpg';

const Galeria = () => {
    return (
        <div className="container-galeria">
        <div className="container-imagen">
            <img src={galeriaUno} alt="gallery" className="imagen-galeria" />
        </div>
        <div className="container-imagen">
            <img src={galeriaDos} alt="gallery" className="imagen-galeria" />
        </div>
        <div className="container-imagen">
            <img src={galeriaTres} alt="gallery" className="imagen-galeria" />
        </div>
        <div className="container-imagen">
            <img src={galeriaCuatro} alt="gallery" className="imagen-galeria" />
        </div>
        <div className="container-imagen">
            <img src={galeriaCinco} alt="gallery" className="imagen-galeria" />
        </div>
        <div className="container-imagen">
            <img src={galeriaSeis} alt="gallery" className="imagen-galeria" />
        </div>
    </div>
    )
}

export default Galeria
