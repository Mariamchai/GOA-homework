import React from "react";
import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };

  const addTask = () => {
    if (input !== '') {
      setTasks([
        ...tasks,
        { text: input, done: false }
      ]);
    }
    setInput('');
  };

  const deletet = (index) => {
    const newtasks = tasks.filter((_, i) => i !== index);
    setTasks(newtasks);
  };

  return (
    <>
      <input
        value={input}
        type="text"
        placeholder="Enter Task"
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task.text}
            <button onClick={() => deletet(i)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;