import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl flex gap-3 shadow-lg">
        <button
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
          onClick={() => setColor('red')}
        >
          Red
        </button>

        <button
          className="rounded-lg bg-green-500 px-4 py-2 text-white"
          onClick={() => setColor('green')}
        >
          Green
        </button>

        <button
          className="rounded-lg bg-blue-500 px-4 py-2 text-white"
          onClick={() => setColor('blue')}
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default App
