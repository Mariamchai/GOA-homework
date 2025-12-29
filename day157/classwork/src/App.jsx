import React, { useState } from 'react'

function App() {
  const [names, setNames] = useState([])
  const [input, setInput] = useState("")

  const addIn = (e) => {
    setInput(e.target.value)
  }

  const addName = () => {
    if (!input.trim()) return 
    setNames([...names, input])
    setInput("")
  }

  return (
    <>
      <input value={input} onChange={addIn} type="text" />
      <button onClick={addName}>add</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>  
        ))}
      </ul>
    </>
  )
}

export default App