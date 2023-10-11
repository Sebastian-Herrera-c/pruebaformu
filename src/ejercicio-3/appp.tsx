import React, { useState } from 'react';
import PersonaForm from './formulariodeingreso';
import PersonaList from './componentelistadepersonas';

function Listaa() {
  const [personas, setPersonas] = useState([]);

  return (
    <div>
      <PersonaForm personas={personas} setPersonas={setPersonas} />
      <PersonaList personas={personas} />
    </div>
  );
}

export default Listaa;
