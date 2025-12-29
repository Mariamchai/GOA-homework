import React ,{ useState } from 'react'


function App() {
  const [list, setlist] = useState([])
  let cart = ["fish","milk","bread"]

  return(
    <>
    <h1>Cart</h1>
    <ul>
      {cart.map((item, index) =>(
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
  )

  
}

export default App
