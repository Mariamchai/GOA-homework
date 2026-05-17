import { useState } from "react"

import dog from "./assets/silly.png"
import cat from "./assets/whisky.png"

function App() {
  const [search, setSearch] = useState("")

  const photos = [
    { id: "dog", img: dog, name: "Dog" },
    { id: "cat", img: cat, name: "Cat" },

  ]

  const filteredPhotos = photos.filter(photo =>
    photo.id.includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-gray-900 text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">PhotoSite</h1>

        <input
          type="text"
          placeholder="Search by id..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-full text-black w-56 outline-none"
        />
      </nav>

      <div className="p-10 flex flex-wrap gap-6">

        {filteredPhotos.map(photo => (
          <div key={photo.id} className="bg-white w-56 p-4 rounded-2xl text-center shadow">

            <img
              src={photo.img}
              className="w-full h-36 object-cover rounded-xl"
            />

            <h2 className="mt-3 text-lg font-semibold">{photo.name}</h2>
            <p className="text-sm text-gray-500">id: {photo.id}</p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default App
