import React from "react";
function Login(props) {
 

  if (props.name === "admin" && props.password === 123) {
    return <h2>succesful</h2>;
  } else {
    return <h2>fail</h2>;
  }
}

export default Login