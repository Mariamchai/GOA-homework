import React, { useState } from "react";

export default function App() {
  const [va, fun] = useState();

  return (
    <>
      <p>{CurrentState}</p>

      <button
        onClick={function () {
          fun(1);
        }}
      >
        On
      </button>

      <button
        onClick={function () {
          fun(0);
        }}
      >
        Off
      </button>
    </>
  );
}
