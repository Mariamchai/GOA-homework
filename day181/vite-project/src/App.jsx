import React from "react";
import "./App.css";
import soap from "./assets/soap.webp"
import shop from "./assets/shop.png"
import soap1 from "./assets/soap1.webp"
import soap2 from "./assets/soap2.webp"
function App() {
  return (
    <div>
      <div className="top-bar">
        Free EU delivery over €80
      </div>

      <div className="navbar">
        <h2 className="logo">PERFUMER H</h2>

        <div className="nav-links">
          <span>PERFUME</span>
          <span>CANDLES</span>
          <span>HOME</span>
          <span>BATHING</span>
          <span>PANTRY</span>
          <span>DISCOVER</span>
          <span>GIFTS</span>
        </div>

        <div className="nav-right">
          ENGLISH      EUR €
        </div>
      </div>

      <div className="hero">
        <img src={shop} alt="" />
        <img src={soap} alt="" />
      </div>


      <div className="hero1">
        <img src={soap1} alt="" />
        <img src={soap2} alt="" />
      </div>
    </div>

  );
}

export default App;