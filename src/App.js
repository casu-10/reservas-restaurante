import React from 'react';
import Reserva from './components/reserva'; 
import ListaReservas from './components/listareservas';

const App = () => {
  return (
    <div className="container">
      <h1>Gestión de Reservas</h1>
      <Reserva />
      <ListaReservas />
    </div>
  );
};

export default App;