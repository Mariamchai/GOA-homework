import React from "react";

function App() {
  const date = new Date();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-10">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-[500px]">

        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Date Object
        </h1>

        <div className="space-y-4">

          <div className="bg-slate-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Current Time</h2>
            <p>{date.toLocaleTimeString()}</p>
          </div>

          <div className="bg-slate-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Current Date</h2>
            <p>{date.toLocaleDateString()}</p>
          </div>

          <div className="bg-slate-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Current Year</h2>
            <p>{date.getFullYear()}</p>
          </div>

          <div className="bg-slate-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Current Month</h2>
            <p>{date.getMonth() + 1}</p>
          </div>

          <div className="bg-slate-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Current Day</h2>
            <p>{date.getDate()}</p>
          </div>

          <div className="bg-slate-200 p-4 rounded-xl">
            <h2 className="font-bold text-lg">Current Week Day</h2>
            <p>{date.getDay()}</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;