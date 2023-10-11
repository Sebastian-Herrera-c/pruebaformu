import React from 'react';

const PersonaList = ({ personas }) => {
  return (
    <div>
      <h2>Lista de Personas</h2>
      <ul>
        {personas.map((persona: { nombre: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; apellido: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; edad: any; }, index: React.Key | null | undefined) => (
          <li key={index}>
            Nombre: {persona.nombre}, Apellido: {persona.apellido}, Edad: {persona.edad || 'No ingresada'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonaList;
