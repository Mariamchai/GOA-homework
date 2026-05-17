import React, {useState, useEffect} from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  }, []);
  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">io</div>

        <nav className="nav">
          <a href="">Work</a>
          <a href="">About</a>
          <a href="">Output</a>
          <a href="">Contact</a>
        </nav>

        <button className="btn">Get in touch →</button>
      </header>

      <section className="hero">
        <h1>
          The future of digital <br />
          business is AI-native.
        </h1>
      </section>
      <h1>{data.data?.[0]}</h1>
    </div>
  );
}

export default App;
