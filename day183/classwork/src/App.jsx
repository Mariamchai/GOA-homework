import { useState } from 'react'
import tuff from './assets/tuff.png'
import tuff1 from './assets/tuff1.png'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>YOUR BLOG NAME</h1>
      <nav>
        <p className='p'>Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Categories</p>
        <p>Contact</p>
        <p>Search</p>
      </nav>
      <div className='card'><img src={tuff} alt="" /></div>
      
      <div >
        <h1>Features</h1>
        <div>
          <div className='container'>
          <img src={tuff1} alt="" />
          </div>
          <div>
            <h1>Your tittle here</h1>
          <p>Lorem ipsum dolor sit amet,eder <br />
          iut consectetuer adipiscing elit, sed <br />
          diam nonummy nibh euismod <br />
          tincidunt ut laoret dolore magna <br />
          aliquam erat vopulat.</p>
          </div>
          
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App
