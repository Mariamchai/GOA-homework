import React from 'react';
import { useState } from 'react';
import Presentational from './Presentational.jsx';


export default function Container() { 
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

  return (
    <>
    <Presentational count={count} onIncrement={increment} onDecrement={decrement} />
    </>
  )
}




presentational.jsx

import { Backpack } from 'lucide-react';
import React from 'react';


export default function Presentational({count, onIncrement, onDecrement}) { 
 return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>

      <h1>{count}</h1>
      <button style={{ background: 'red', color: 'white'}} onClick={onIncrement}>Add</button>
      <button onClick={onDecrement}>Subtract</button>

    </div>
 )
}