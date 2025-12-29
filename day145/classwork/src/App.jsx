import React from "react";
import Login from "./main";
function App() {
  return (
    <div>
      <Login name="admin" password={123} />
      <Login name="user" password={555} />
    </div>
  );
}

export default App;
