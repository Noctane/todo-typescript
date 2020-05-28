import React, { useState } from 'react'
import { Edit2, Trash } from 'react-feather';

interface Todo {
  id: number;
  label: string;
  checked: boolean;
}
interface TodoItemProps {
  todo: Todo;
  onCheckBoxChange: React.ChangeEventHandler;
  onClickDelete: (todoId: number) => void;
  // onClickEdit(event: React.MouseEvent<HTMLButtonElement>): void;
  isChecked: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onCheckBoxChange, isChecked, onClickDelete }) => {

  const [editMode, setEditMode] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setEditMode(!editMode)
  }

  return (
    <div className={`${isChecked ? 'bg-gray-200' : ''} group flex justify-between items-center px-6 py-4 hover:bg-gray-100`}>
      <div className="flex items-center">
        <input onChange={onCheckBoxChange} className="mr-2 leading-tight" type="checkbox" name="todo-item" id="item-0" />
        {editMode ?
          <input type="text" />
          :
          <span className={`${isChecked ? 'line-through' : ''}`}>{todo.label}</span>
        }
      </div>
      <div className="invisible group-hover:visible">
        <button onClick={handleClick} className="text-white py-2 px-2 rounded focus:outline-none">
          <Edit2 color="#5a67d8" size={16} />
        </button>
        {isChecked &&
          <button onClick={() => onClickDelete(todo.id)} className="text-white py-2 px-2 rounded focus:outline-none">
            <Trash color="#e53e3e" size={16} />
          </button>
        }
      </div>
    </div>
  );
}