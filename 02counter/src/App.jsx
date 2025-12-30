// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let count = 0

  const addValue = () => {
    console.log("Added Value", Math.random());
  }

  const removeValue = () => {
    console.log("Removed Value", Math.random());
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter : {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
