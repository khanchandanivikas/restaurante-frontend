import React from 'react';
import BienvenidoReservas from '../Components/Intros/BienvenidoReservas';
import FondoFormReserva from '../Components/FondoFormReserva';
import Direccion from '../Components/Direccion';

const Reservas = () => {
    return (
        <div>
            <BienvenidoReservas />
            <FondoFormReserva />
            <Direccion />
        </div>
    )
}

export default Reservas
