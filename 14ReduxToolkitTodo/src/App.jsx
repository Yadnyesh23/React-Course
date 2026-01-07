
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
     <h1 className='text-3xl text-center mb-8 mt-4 font-semibold text-red-600'>Leanring Redux ToolKit</h1>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
