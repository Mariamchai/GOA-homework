import React, {useState, useTransition} from "react";

export default function App() {
    const [item, setItem] = useState(['Snikers'])
    const [input, setInput] = useState("") 

    const addItem = () => {
        setItem([...item, input])
    }

    const handleOnChange = (e) => {
        setInput(prev => prev = e.target.value)
    }

    function handleClick(e){
        e.target.style.textDecoration = 'line-through'
    }


    return (
        <>
        <ul>{item.map((candy)=>{
            return <li onClick={handleClick}>{candy}</li>
        })}</ul>

        <input type="text" placeholder="Type Item" onChange={handleOnChange}/>
 
        <button onClick={addItem}>Add</button>
        
        </>
    )
}
