function TodoItem({ task, taskIndex, removeTask }) {
  return (
    <div className="flex justify-between items-center p-2 mb-2 border-b border-gray-700 bg-gray-800 rounded">
      <p className="text-white">{task}</p>
      <button
        onClick={() => removeTask(taskIndex)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
