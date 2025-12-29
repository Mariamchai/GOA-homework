import React, { useState } from "react";

export default function App(){
  const[input, infoinput] = useState("")

  const heading = (e) =>{
    const inputvalue = e.target.value
    infoinput(inputvalue)
  }
    function Clear() {
    infoinput("");
  }
  return(
    <>
    <h1>input value is {input}</h1>
    <input onChange={heading} />
    <button onClick={Clear}>clear</button>
    </>
  )
}
