import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mycomp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyComp
        name="Mariam" 
        age={15} 
         
      />
  </StrictMode>,
)

