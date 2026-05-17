import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <nav className="bg-white flex justify-between items-center px-20 py-5 shadow-sm">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
            T
          </div>

          <h1 className="text-4xl font-bold">
            BestTech
          </h1>
        </div>

        <ul className="flex gap-14 text-gray-500 text-2xl">
          <li className="hover:text-black cursor-pointer">
            Tools
          </li>

          <li className="hover:text-black cursor-pointer">
            Blog
          </li>

          <li className="hover:text-black cursor-pointer">
            Contact
          </li>

          <li className="hover:text-black cursor-pointer">
            About
          </li>
        </ul>

        <button className="bg-orange-400 text-white px-8 py-3 rounded-xl text-2xl hover:bg-orange-500">
          Login
        </button>

      </nav>

      <div className="px-20 py-14">

        <h1 className="text-5xl font-bold mb-12">
          Featured Products
        </h1>

        <div className="grid grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl p-5 border">

            <div className="bg-yellow-100 rounded-2xl relative p-6">
              <span className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-lg">
                -20%
              </span>

              <img
                src="https://pngimg.com/uploads/computer_pc/computer_pc_PNG17494.png"
                alt=""
                className="h-72 mx-auto object-contain"
              />
            </div>

            <h2 className="text-2xl mt-6 font-medium">
              Cougar DarkBlader-G ARGB Full Tower Case
            </h2>

            <div className="flex gap-4 mt-6 items-center">
              <span className="text-orange-400 text-3xl font-bold">
                $540
              </span>

              <span className="text-gray-400 line-through text-2xl">
                $500
              </span>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="bg-gray-100 px-5 rounded-xl">
                
              </button>

              <button className="bg-gray-100 w-full py-4 rounded-xl text-cyan-700 text-2xl hover:bg-cyan-100">
                Add to cart
              </button>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-5 border">

            <div className="bg-yellow-100 rounded-2xl relative p-6">
              <span className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-lg">
                -10%
              </span>

              <img
                src="https://pngimg.com/uploads/laptop/laptop_PNG5938.png"
                alt=""
                className="h-72 mx-auto object-contain"
              />
            </div>

            <h2 className="text-2xl mt-6 font-medium">
              HP Envy i3-BA0071TX Laptop - 10th Gen Ci7
            </h2>

            <div className="flex gap-4 mt-6 items-center">
              <span className="text-orange-400 text-3xl font-bold">
                $1200
              </span>

              <span className="text-gray-400 line-through text-2xl">
                $1000
              </span>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="bg-gray-100 px-5 rounded-xl">
                
              </button>

              <button className="bg-gray-100 w-full py-4 rounded-xl text-cyan-700 text-2xl hover:bg-cyan-100">
                Add to cart
              </button>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-5 border">

            <div className="bg-yellow-100 rounded-2xl p-6">
              <img
                src="https://pngimg.com/uploads/keyboard/keyboard_PNG101839.png"
                alt=""
                className="h-72 mx-auto object-contain"
              />
            </div>

            <h2 className="text-2xl mt-6 font-medium">
              Logitech Mechanical Keyboard
            </h2>

            <div className="flex gap-4 mt-6 items-center">
              <span className="text-orange-400 text-3xl font-bold">
                $200
              </span>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="bg-gray-100 px-5 rounded-xl">
                
              </button>

              <button className="bg-gray-100 w-full py-4 rounded-xl text-cyan-700 text-2xl hover:bg-cyan-100">
                Add to cart
              </button>
            </div>

          </div>

          <div className="bg-white rounded-3xl p-5 border">

            <div className="bg-yellow-100 rounded-2xl relative p-6">
              <span className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-lg">
                -15%
              </span>

              <img
                src="https://pngimg.com/uploads/motherboard/motherboard_PNG109.png"
                alt=""
                className="h-72 mx-auto object-contain"
              />
            </div>

            <h2 className="text-2xl mt-6 font-medium">
              Cougar Panzer EVO RGB Gaming Case
            </h2>

            <div className="flex gap-4 mt-6 items-center">
              <span className="text-orange-400 text-3xl font-bold">
                $1999
              </span>

              <span className="text-gray-400 line-through text-2xl">
                $1699
              </span>
            </div>

            <div className="flex gap-3 mt-8">
              <button className="bg-gray-100 px-5 rounded-xl">
                
              </button>

              <button className="bg-gray-100 w-full py-4 rounded-xl text-cyan-700 text-2xl hover:bg-cyan-100">
                Add to cart
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
