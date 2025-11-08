import React from "react";

function FruitsList() {
  const fruits = ["pear", "cherry", "apple"];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}

export default FruitsList