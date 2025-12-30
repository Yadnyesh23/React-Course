// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count+1)
  }

  const removeValue = () => {
        setCount(count-1)

  }

  
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter : {count}</h2>

      <button onClick={addValue}>Add Value {count}</button>
      <button onClick={removeValue}>Remove Value {count}</button>
      <footer>Footer : {count}</footer>
    </>
  )
}

export default App
