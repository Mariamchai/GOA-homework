import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["Snickers", "Mars", "Twix"]);
  const [input, setInput] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(null);

  function handleChange({ target }) {
    setInput(target.value);
  }

  function addItem() {
    if (!input.trim()) return;
    setItems(prev => [...prev, input]);
    setInput("");
  }

  function randomIndex() {
    setHighlightIndex(Math.floor(Math.random() * items.length));
  }

  function handleItemClick(e) {
    e.target.style.textDecoration = "line-through";
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <button onClick={randomIndex}>Random</button>

      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            onClick={handleItemClick}
            style={{
              color: highlightIndex === i ? "red" : "black",
              cursor: "pointer"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
