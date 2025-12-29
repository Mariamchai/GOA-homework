import React, {useState} from "react";

const ExampleComponent = () => {
  const [name, setName] = useState("");        
  const [clicked, setClicked] = useState(false);


  const handleChange = (e) => {
    setName(e.target.value);
  };


  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      <input onChange={handleChange}/>

      <button onClick={handleClick}>Click me</button>

      <p>
        {clicked ? `Hello, ${name}`: "You clicked the button, but no name was entered."}
      </p>
    </>
  );
};

export default ExampleComponent;