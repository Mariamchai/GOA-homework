import { useState } from 'react'
import plane from './assets/plane.png'
import review from './assets/review.webp'
import fiction from './assets/fiction.webp'
import poetry0 from './assets/poetry0.webp'
import poetry from './assets/poetry.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h1>Soft Union</h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>Search</p>
        <p>Table of Contents</p>
        <p>Bag Empty</p>
      </nav>
      <center><div>
        <h3>GOOD EVENING</h3>
        <p>Today is March 29, 2026, 10:54 </p>       
      </div>
      
      
      <div>
        <img src={plane}alt="" />
      </div>
      </center>

      <div className='container'>
        <div className='card'>
          <center><img src={review} alt="" />
          <h3>REVIEW</h3>
          <p>Carl Sandburg</p>
          <p>Notes For a Review of The Spoon River Anthology</p></center>
        </div>
        <div className='card'>
          <center><img src={fiction} alt="" />
          <h3>FICTION</h3>
          <p>Sam Berman</p>
          <p>In March</p></center>
        </div>
        <div className='card'>
          <center><img src={poetry0} alt="" />
          <h3>POETRY</h3>
          <p>Carly Fellars</p>
          <p>Maple Brass</p></center>
        </div>
        <div className='card'>
          <center><img src={poetry} alt="" />
          <h3>POETRY</h3>
          <p>Ezra Pound</p> 
          <p>Xenia</p></center>
        </div>
      </div>
      <center>
        <div>
          <p>Soft Union publishes New Literature every weekday Monday - Friday</p>
        </div>
      </center>
    </>
  )
}

export default App
