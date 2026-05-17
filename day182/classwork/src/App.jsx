import { useState } from 'react'
import fb from "./assets/fb.png"
import dot from './assets/dot.png'
import get from './assets/get.png'
import art from './assets/Artcenter.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div ><img className='image' src={art} alt="" /></div>
        <div id='images'>
          <img src={fb} alt="" />
        <img src={dot} alt="" />
        <img src={get} alt="" />
        </div>
      </div>

    </>
  )
}

export default App
