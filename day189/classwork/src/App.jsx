import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center p-8">
      <div className="w-[1100px] bg-white">
        <nav className="flex items-center justify-between px-10 py-4 bg-blue-100 border-b-2 border-blue-400">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🐱</span>
            <h1 className="text-lg font-semibold text-gray-800">Cat</h1>
          </div>

          <ul className="flex items-center gap-10 text-gray-600">
            <li>Overview</li>
            <li>Why Cats?</li>
            <li>Diet</li>
            <li>
              <button className="border border-blue-500 text-blue-600 px-4 py-1 rounded">
                Adopt Meow
              </button>
            </li>
          </ul>
        </nav>

        <main className="relative h-[550px] flex items-center justify-center">
          <img
            src="/cat.jpg"
            alt=""
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/60"></div>

          <div className="relative text-center px-4">
            <h2 className="text-5xl font-semibold text-black mb-4">
              Cats Make Life Better
            </h2>

            <p className="text-xl text-gray-800 mb-6">
              The key to a happy life is having a cat
            </p>

            <button className="bg-blue-500 text-white px-6 py-2 rounded text-lg">
              Adopt Meow
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
