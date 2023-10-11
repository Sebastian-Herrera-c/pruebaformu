import React, { useState } from 'react';

const PersonaForm = ({ personas, setPersonas }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  const agregarPersona = () => {
    if (nombre.trim() === '' || apellido.trim() === '') {
      alert('Nombre y Apellido son campos obligatorios');
      return;
    }

    const nuevaPersona = {
      nombre,
      apellido,
      edad: edad || null,
    };

    setPersonas([...personas, nuevaPersona]);

 
    setNombre('');
    setApellido('');
    setEdad('');
  };

  const limpiarPersonas = () => {
    setPersonas([]);
    setNombre('');
    setApellido('');
    setEdad('');
  };

  const filtrarPersonas = () => {
    const personasFiltradas = personas.filter((persona: { edad: number; }) => !persona.edad || persona.edad < 18);
    setPersonas(personasFiltradas);
  };

  return (
    <div>
      <h2>Formulario de Ingreso de Personas</h2>
      <label>Nombre: </label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <label>Apellido: </label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      <br />
      <label>Edad (opcional): </label>
      <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <br />
      <button onClick={agregarPersona}>Agregar</button>
      <button onClick={limpiarPersonas}>Limpiar</button>
      <button onClick={filtrarPersonas}>Filtrar</button>
    </div>
  );
};

export default PersonaForm;
