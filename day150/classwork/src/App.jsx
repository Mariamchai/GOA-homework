import React, {useState} from "react";
function App(){
  const [count,setcount]= useState(0)
function Increase(){
  setcount(count+1)
}
function Decrease(){
  if(count>0){
    setcount(count-1)
  }
}
function Reset(){
  setcount(0)
}
return(
  <>
  <h1>{count}</h1>
  <button onClick={Increase}>add</button>
  <button onClick={Decrease}>subtract</button>
  <button onClick={Reset}>Reset</button>
  
  
  </>
)}

export default App