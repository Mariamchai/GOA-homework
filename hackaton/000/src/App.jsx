import { useState, useEffect } from "react"
export default function App(){
  const [count,setcount] = useState(0)
  useEffect(()=>{
    document.title = `counter:${count}`
    console.log('meaning updated ', count)
  })
  return(
    <>
    <h1>number {count}</h1>
    <button onClick={() => setcount(count + 1)}>add</button>
    </>
  )
}
