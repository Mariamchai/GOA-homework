import React, { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('mari');
  }, [count]);

  return (
    <>
      <h1>Hello World!</h1>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <input
        type="text"
        onChange={() => {
          setName(prevName => prevName + '1');
        }}
      />
    </>
  );
}

