import React, { useState } from 'react';

function Pila() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlePush = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setStack([...stack, inputValue]);
    setInputValue("");
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    const nuevoStack = [...stack];
    nuevoStack.pop();
    setStack(nuevoStack);
  };

  const topeActual = stack.length > 0 ? stack[stack.length - 1] : 'NINGUNO';

  return (
    <div style={{ padding: '25px', fontFamily: 'Arial, sans-serif', maxWidth: '450px', margin: '0 auto' }}>
      {/* Visualizar los datos de la Pila */}
      <div>
        <h3>Visualizar los datos de la Pila</h3>

        {/* Input y Botón Push */}
        <form onSubmit={handlePush} style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Introduce un dato"
            style={{ padding: '6px 10px', flex: '1', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button
            type="submit"
            style={{ backgroundColor: '#558b2f', color: 'white', padding: '6px 18px', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
          >
            Push
          </button>
        </form>

        {/* Botón Pop */}
        <div style={{ marginBottom: '15px' }}>
          <button
            type="button"
            onClick={handlePop}
            style={{ backgroundColor: '#6d4c41', color: 'white', padding: '6px 20px', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}
          >
            Pop
          </button>
        </div>

        {/* Panel de Estado (Tope y Tamaño) */}
        <div style={{ background: '#d5ded5', padding: '10px', marginBottom: '15px', borderRadius: '4px', border: '1px solid #bccebc', textAlign: 'center' }}>
          <p style={{ margin: '4px 0' }}>
            <strong>Tope actual:</strong> {topeActual}
          </p>
          <p style={{ margin: '4px 0' }}>
            <strong>Tamaño de la pila:</strong> {stack.length}
          </p>
        </div>

        {/* Contenedor Visual de la Pila */}
        <div style={{ border: '2px solid #333', padding: '15px', minHeight: '160px', display: 'flex', flexDirection: 'column', gap: '8px', borderRadius: '4px', backgroundColor: '#fff' }}>
          {stack.length === 0 ? (
            <p style={{ color: '#777', textAlign: 'center', margin: 'auto', fontStyle: 'italic' }}>Pila vacía</p>
          ) : (
            [...stack].reverse().map((elemento, index) => {
              const esTope = index === 0;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: esTope ? '#9ac33b' : '#6c757d',
                    color: 'white',
                    padding: '10px',
                    textAlign: 'center',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}
                >
                  {elemento} {esTope && '-- TOPE'}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Pila;