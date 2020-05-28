import React, { useReducer } from 'react'
import { TodoItem } from '../../components/TodoItem';
import { initialState, reducer } from './TodoReducer';

interface TodoListProps {
}

export const TodoList: React.FC<TodoListProps> = () => {

  const [{ todos }, dispatch] = useReducer(reducer, initialState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: 'test' });
  }

  const onCheckTodo = (todoId: number) => {
    dispatch({ type: 'CHECK_TODO', payload: todoId })
  }
  console.log('state', todos);
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white text-gray-500">
      <div className="px-6 py-4 border-b border-gray-300">
        <h1 className="text-center">Todo list</h1>
      </div>
      <div className="py-4 px-6 border-b border-gray-300">
        <div className="flex items-center">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="Learn Typescript"
          />
          <button onClick={handleClick} className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">Save</button>
        </div>
      </div>
      {todos.map(todo => (
        <TodoItem label={todo.label} isChecked={todo.checked} onCheckBoxChange={() => onCheckTodo(todo.id)} key={todo.id} />
      ))}
    </div>);
}