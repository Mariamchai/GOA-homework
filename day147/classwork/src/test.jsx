import React from "react";

export default function Test(props){
    return(
        <h1>{props.name ? "approved" : "dissaproved"}</h1>
    )
}