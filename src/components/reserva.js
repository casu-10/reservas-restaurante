import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Reserva = () => {
  const [nombre, setNombre] = useState('');
  const [personas, setPersonas] = useState('');
  const [fecha, setFecha] = useState('');
  const [estado, setEstado] = useState('Confirmada');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !personas || !fecha) {
      alert('Todos los campos son obligatorios');
      return;
    }

    try {
      await addDoc(collection(db, 'reservas'), {
        nombre,
        personas,
        fecha,
        estado,
      });

      setNombre('');
      setPersonas('');
      setFecha('');
      setEstado('Confirmada');

      alert('Reserva creada con éxito');
    } catch (error) {
      console.error("Error creando la reserva: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número de personas"
        value={personas}
        onChange={(e) => setPersonas(e.target.value)}
      />
      <input
        type="datetime-local"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="Confirmada">Confirmada</option>
        <option value="Cancelada">Cancelada</option>
      </select>
      <button type="submit">Crear Reserva</button>
    </form>
  );
};

export default Reserva;