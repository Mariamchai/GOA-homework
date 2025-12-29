import React from "react";
import Childcomponent from "./childomponent.jsx";

export default function Parentcomponent(){
    return(
        <>
        <Childcomponent
        name="mari"
        age="14"
        city="tbilisi"
        bgcolor="blue"/>
        
        </>
    )
}