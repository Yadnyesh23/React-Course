import { useState } from "react";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);       // List of tasks
  const [newTask, setNewTask] = useState("");   // Input value

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;          // Prevent empty task
    setTodos([...todos, newTask]);              // Add task
    setNewTask("");                              // Clear input
  };

  // Remove task by index
  const removeTask = (taskIndex) => {
    setTodos(todos.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="bg-black w-full h-screen p-4">
      <h1 className="text-4xl text-white text-center mb-4">Todo App</h1>

      {/* Input */}
      <div className="flex justify-center mb-4 gap-2 ">
        <input
          type="text"
          placeholder="Enter task here"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 rounded w-1/3 bg-white"
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Todo List */}
      <div>
        <h2 className="text-2xl text-white text-center mb-2">Todo List</h2>
        <TodoList todos={todos} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default App;
