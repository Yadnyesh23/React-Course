
import { useState } from 'react';
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count <10){
      setCount(count+1)
    }else{
      setCount(0)
    }
  }

  const removeValue = () => {
        if(count > -10){
          setCount(count-1)
        }else{
          setCount(0)
        }

  }

  const resetValue = () => {
    setCount(0)
  }
  
  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter : {count}</h2>

      <button onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value </button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value </button>
    </>
  )
}

export default App
