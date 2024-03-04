import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount(count + 1);
  };
  
  const handleSubstract = () => {
    setCount(count - 1);
  };
  
  const handleReset = () => {
    setCount(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {count} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      {/* La propiedad aria-label se usa como si fuera una propiedad id para el caso que queramos buscar algo en el test suite, por ejemplo en el archivo de test tengo algo como esto "screen.getByRole('button', {name: 'btn-reset'})". getByRole busca el elemento en el html y si queremos un elemento especifico hay que buscarlo por la opción name */}
      <button aria-label='btn-reset' onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.protoTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProp = {
  value: 1,
};
