// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {

  return (
    <>
      <h1 className='bg-grey-500 text-shadow-white p-4 rounded-2xl' >Tailwind test</h1>
      <Card username="Yadnyesh" btnText="Follow"/>
      <Card username="Stavan" btnText="Follow"/>
    </>
  )
}

export default App
