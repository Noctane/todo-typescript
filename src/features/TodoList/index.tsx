import React, { useReducer, useState } from 'react'
import { TodoItem } from '../../components/TodoItem';
import { initialState, reducer } from './TodoReducer';


export const TodoList: React.FC = () => {

  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  const onSaveTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo });
    setTodo('');
  }

  const onDeleteTodo = (todoId: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: todoId })
  }

  const onEditTodo = (todoId: number, label: string) => {
    console.log('todoId', todoId);
    dispatch({ type: 'EDIT_TODO', payload: { id: todoId, label: label } })
  }
  const onCheckTodo = (todoId: number) => {
    dispatch({ type: 'CHECK_TODO', payload: todoId })
  }

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white text-gray-500">
      <div className="px-6 py-4 border-b border-gray-300">
        <h1 className="text-center">Todo list</h1>
      </div>
      <div className="py-4 px-6 border-b border-gray-300">
        <form onSubmit={onSaveTodo}>
          <div className="flex items-center">
            <input
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Get shit done"
              value={todo}
            />
            <button disabled={todo === ''} onClick={onSaveTodo} className="ml-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-200 text-white py-2 px-4 rounded">Save</button>
          </div>
        </form>
      </div>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          isChecked={todo.checked}
          onCheckBoxChange={() => onCheckTodo(todo.id)}
          onClickEdit={onEditTodo}
          key={todo.id}
          onClickDelete={onDeleteTodo}
        />
      ))}
    </div>);
}