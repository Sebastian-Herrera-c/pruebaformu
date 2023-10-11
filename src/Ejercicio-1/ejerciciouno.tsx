import React, { useState } from 'react';

const NumberCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [operation, setOperation] = useState<string>('suma');
  const [result, setResult] = useState<number | null>(null);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setNumbers([...numbers, newValue]);
      event.target.value = '';
    }
  };

  const handleOperationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(event.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult: number | null = null;
    if (operation === 'suma') {
      calculatedResult = numbers.reduce((a, b) => a + b, 0);
    } else if (operation === 'media') {
      calculatedResult = numbers.length > 0 ? numbers.reduce((a, b) => a + b, 0) / numbers.length : 0;
    } else if (operation === 'mayor') {
      calculatedResult = numbers.length > 0 ? Math.max(...numbers) : null;
    } else if (operation === 'menor') {
      calculatedResult = numbers.length > 0 ? Math.min(...numbers) : null;
    }
    setResult(calculatedResult);
  };

  const handleClear = () => {
    setNumbers([]);
    setResult(null);
  };

  return (
    <div>
      <h1>Números y Calculadora</h1>
      <input type="number" placeholder="Ingrese un número entero" onChange={handleNumberChange} />
      <div>
        <select value={operation} onChange={handleOperationChange}>
          <option value="suma">Suma</option>
          <option value="media">Media</option>
          <option value="mayor">Mayor</option>
          <option value="menor">Menor</option>
        </select>
        <button onClick={handleCalculate}>Calcular</button>
        <button onClick={handleClear}>Limpiar</button>
      </div>
      {numbers.length > 0 && (
        <div>
          Números ingresados: {numbers.join(', ')}
        </div>
      )}
      {result !== null && (
        <div>
          Resultado: {result}
        </div>
      )}
    </div>
  );
};

export default NumberCalculator;