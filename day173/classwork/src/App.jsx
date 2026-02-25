import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(null)

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(result =>{
      console.log(result)
    })
  })
}
export default App
