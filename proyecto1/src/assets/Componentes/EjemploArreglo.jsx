import { useEffect, useState } from "react";
import React from 'react';

function EjemploArreglo() {
  // 1. Los hooks y funciones van ANTES del return
  const [elementos, setElementos] = useState([]);

  const agregarDato = () => {
    const nuevoNumero = Math.floor(Math.random() * 50);
    setElementos([...elementos, nuevoNumero]);
  };

  const recorrerArreglo = (elemento, index) => (
    <li key={index} style={{ margin: '5px 0', fontSize: '18px' }}>
      Elemento #{index + 1}: <strong>{elemento}</strong>
    </li>
  );

  useEffect(() => {
    console.log("El arreglo de datos actual es: ", elementos);
  }, [elementos]);

  // 2. Todo el JSX va dentro de un solo contenedor o fragmento (<> ... </>)
  return (
    <>
      <div>EjemploArreglo</div>
      <h1>Mi primer arreglo de datos</h1>
      <div style={{ padding: '20px' }}>
        <h2>Paso 1. Agregar datos al arreglo</h2>
        <button onClick={agregarDato}>Agregar numero aleatorio</button>
        <ul>
          {elementos.length === 0 ? (
            <>
              <p>Aún no hay elementos en el arreglo</p>
              <p>Presiona el botón de agregar datos</p>
            </>
          ) : (
            elementos.map(recorrerArreglo)
          )}
        </ul>
      </div>
    </>
  );
}

export default EjemploArreglo;