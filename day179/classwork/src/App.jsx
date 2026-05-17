import react from 'react'


function App() {
  const buttonStyle = {
  backgroundColor: "green",
  color: "white",

};
  return (
    <>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Inline 
      </button>

      
      <button style={buttonStyle}>
        ktjgitjgSDS
      </button>
    </>
  );
}


export default App
