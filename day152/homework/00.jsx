import React, {useState} from "react";
export default function App(){
    const[text, settext]=useState("")
    const handlechange =(e) =>{
        const value= e.target.value
        settext(value)}

    

    return(
        <>
        <h1>{text}</h1>
        <input type="text" value={text} onChange={handlechange}/>
        
        
        </>

    )
}