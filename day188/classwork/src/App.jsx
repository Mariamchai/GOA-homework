import React from "react";
import { useState } from 'react'
import tailwindcss from "@tailwindcss/vite"; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
     <div className="flex justify-center items-center h-screen bg-gray-200">

      <div className="flex gap-6">

        {/* Card 1 */}
        <div className="bg-white p-6 text-center border w-64">
          <h2 className="font-bold mb-3">TWITTER</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            READ MORE
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-500 p-6 text-center text-white w-64">
          <h2 className="font-bold mb-3">INSTAGRAM</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?
          </p>
          <button className="bg-white text-pink-500 px-4 py-2 rounded-full">
            READ MORE
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 text-center border w-64">
          <h2 className="font-bold mb-3">YOUTUBE</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            READ MORE
          </button>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
