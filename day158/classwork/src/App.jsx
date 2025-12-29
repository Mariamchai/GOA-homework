import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    setValue(value + Number(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h1>{value}</h1>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default App;