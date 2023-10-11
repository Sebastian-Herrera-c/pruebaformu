import React, { useState } from 'react';
import './Medicion.css';

function Medicion() {
  const [mediciones, setMediciones] = useState([]);
  const [ciudad, setCiudad] = useState('');
  const [grados, setGrados] = useState('');
  const [calcular, setCalcular] = useState(false);

  const agregarMedicion = () => {
    if (!ciudad || isNaN(grados)) {
      alert('Ciudad y Grados son campos obligatorios y Grados debe ser un número.');
      return;
    }

    const nuevaMedicion = {
      ciudad,
      grados: parseFloat(grados),
      calcular,
    };

    setMediciones([...mediciones, nuevaMedicion]);

    // Limpiar el formulario
    setCiudad('');
    setGrados('');
    setCalcular(false);
  };

  const limpiarMediciones = () => {
    setMediciones([]);
  };

  return (
    <div>
      <h1>Registro de Mediciones</h1>
      <div>
        <label>Ciudad:</label>
        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
      </div>
      <div>
        <label>Grados (Celsius):</label>
        <input type="number" value={grados} onChange={(e) => setGrados(e.target.value)} />
      </div>
      <div>
        <label>Calcular en Fahrenheit:</label>
        <input type="checkbox" checked={calcular} onChange={(e) => setCalcular(e.target.checked)} />
      </div>
      <button onClick={agregarMedicion}>Agregar</button>
      <button onClick={limpiarMediciones}>Limpiar</button>
      <ul>
        {mediciones.map((medicion, index) => (
          <li key={index}>
            <strong>Ciudad:</strong> {medicion.ciudad},{' '}
            <strong>Grados (Celsius):</strong> {medicion.grados}
            {medicion.calcular && (
              <span>
                , <strong>Grados (Fahrenheit):</strong>{' '}
                {getFahrenheit(medicion.grados).toFixed(2)}
              </span>
            )}
            <div className="circle" style={{ backgroundColor: getColor(medicion.grados) }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getColor(grados: number) {
  if (grados < 0) return 'white';
  if (grados < 20) return 'blue';
  if (grados < 35) return 'orange';
  return 'red';
}

function getFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

export default Medicion;
