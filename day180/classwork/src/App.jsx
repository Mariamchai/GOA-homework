import React from "react";
import { useState } from "react";
import wallet from "./assets/wallet.png"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "32px" }}>
      <h1>E-Commerce in React and SnipCart</h1>

      <div style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "220px",
        margin: "32px auto",
        overflow: "hidden"
      }}>
        <img
          src={wallet}
          style={{ width: "100%" }}
        />

        <div style={{ padding: "16px", textAlign: "left" }}>
          <h2>Wallet</h2>
          <p>A fancy wallet</p>
          <p><strong>$20</strong></p>

          <button>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;