import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [item, setitem] = useState("")
  
useEffect(()=>{fetch(`https://api.github.com/users/octocat`)
  .then(response => response.json())
  .then(data => {setitem(data);})})

  

  const handlesearch = async (e) =>{
    const data = fetchData(e.target.search.value)
    setitem(data)
    console.log("data")
  }
return(
  <body style={{backgroundColor :"#141c2f"}}>
    <form onSubmit={handlesearch}>
      <input style={{backgroundColor :"#141c2f"}} type="text" placeholder='Enter your username...'/>
    </form>

  </body>
)}

export default App