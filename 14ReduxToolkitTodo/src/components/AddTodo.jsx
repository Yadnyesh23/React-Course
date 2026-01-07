import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex gap-3 p-4 bg-[#FFF8F1] rounded-xl shadow-md"
    >
      <input
        type="text"
        className="flex-1 px-4 py-2 rounded-lg border border-red-200 
                   bg-white text-gray-800 placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-red-300"
        value={input}
        placeholder="Enter a todo..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium
                   hover:bg-red-600 active:scale-95 transition "
      >
        Submit
      </button>
    </form>
  );
}

export default AddTodo;
