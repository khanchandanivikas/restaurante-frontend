import React from 'react';
import "./../../style/Bienvenido.css";
import bienvenidoImagenBlog from "./../../images/bienvenidoImagenBlog.jpg";

const BienvenidoBlog = () => {
    return (
        <div>
             <div className='bg-imagen' style={{backgroundImage: `url(${bienvenidoImagenBlog})`}}>
                <h1 className='bienvenido'>BLOG</h1>
            </div>
        </div>
    )
}

export default BienvenidoBlog
