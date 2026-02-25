import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setcount] = useState(0);

  

  useEffect(() => {
    console.log("done")
  },[count]
)

  return (
    <><h1>Document Clicks: {count}</h1>
      <button onClick={()=>{setcount(prevcount => prevcount+1)}}>click</button>
      
      
      </>
      
  );
}