import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../feature/todo/todoSlice';

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch =  useDispatch()

    return (
        <>
            <div className="mb-3 text-2xl text-center mt-8 font-semibold text-red-600">
                Todos
            </div>

            <ul className="space-y-3">
                {
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between
                                       px-4 py-3 rounded-lg
                                       bg-[#FFF8F1] shadow-sm
                                       border border-red-100"
                        >
                            <span className="text-gray-800">
                                {todo.text}
                            </span>

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="px-3 py-1 rounded-md
                                           bg-red-500 text-white text-sm font-medium
                                           hover:bg-red-600 active:scale-95
                                           transition"
                            >
                                X
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todos;
