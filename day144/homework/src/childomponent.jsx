import React from "react";

export default function Childcomponent(name, age, city, bgcolor){
    return(
        <div style={{background:bgcolor}}>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    )
}