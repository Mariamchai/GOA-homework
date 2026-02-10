import React, { useState } from "react";


export default function App() {
    const [item, setItem] = useState([])
    const [inputValue, setInputvalue] = useState('')

    function handleInput({target}) {
        setInputvalue(target.value)
    }

    function handleClick(){
        if (inputValue.trim() != '') {
            setItem([...item,inputValue])
        }
    }

    return (
        <>
        <input value={inputValue} type="text" onChange={handleInput}/>
        <button onClick={handleClick}>add</button>

        <ul>
            {item.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
};