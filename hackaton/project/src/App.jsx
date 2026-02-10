import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [item, setitem] = useState("")
  
useEffect(
  fetch(`https://api.github.com/users/octocat`)
  .then(response => response.json())
  .then(data => {setitem(data[0]);}))

  const handlesearch = async (e) =>{
    e.preventDefault()
    const data = fetchData(e.target.search.value)
    setitem(data)
    console.log("data")
  }
return(
  <div>
    <form onSubmit={handlesearch}>
      <input style={{backgroundColor :"#141c2f"}} type="text" placeholder='Enter your username...'/>
    </form>

  </div>
)}

export default App
