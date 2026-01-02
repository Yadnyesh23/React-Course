import TodoItem from "./Todoitem.jsx";

function TodoList({ todos, removeTask }) {
  return (
    <div className="w-1/2 mx-auto">
      {todos.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          taskIndex={index}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
