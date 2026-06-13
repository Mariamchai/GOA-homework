import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/NOWAY.png'
import heroImg from './assets/hero.png'
import cat from './assets/whisky.png'
import './App.css'

function App() {
  return (
    <div className="container">

      <div className="top-image">
        <img src={reactLogo} className="lol" />
      </div>
      <div className="images-row">
        <div className="image-box"><img src={viteLogo} alt="" /></div>
        <div className="image-box"><img src={heroImg} alt="" /></div>
        <div className="image-box"><img src={cat} alt="" /></div>
      </div>
    </div>
  );
}

export default App;
