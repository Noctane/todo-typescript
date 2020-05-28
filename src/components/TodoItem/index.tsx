import React, { useState } from 'react'
import { Check, Edit2, Trash } from 'react-feather';

interface Todo {
  id: number;
  label: string;
  checked: boolean;
}
interface TodoItemProps {
  todo: Todo;
  onCheckBoxChange: React.ChangeEventHandler;
  onClickDelete: (todoId: number) => void;
  onClickEdit(todoId: number, label: string): void;
  isChecked: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onCheckBoxChange, isChecked, onClickDelete, onClickEdit }) => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.label)

  const toggleEditMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setEditMode(!editMode);
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(e.target.value);
  };

  const onEditTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClickEdit(todo.id, editedTodo);
    setEditMode(!editMode);
  }

  return (
    <form onSubmit={(e) => onEditTodo(e)}>
      <div className={`${isChecked ? 'bg-gray-200' : ''} group flex justify-between items-center px-6 py-4 hover:bg-gray-100`}>
        <div className="flex items-center">
          <input
            type={editMode ? 'text' : 'hidden'} // Fix the uncontrolled to controlled component switch when toggling editMode
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={editedTodo}
            onChange={handleEdit}
          />
          {!editMode &&
            <>
              <input onChange={onCheckBoxChange} className="mr-2 leading-tight focus:outline-none" type="checkbox" name="todo-item" id="item-0" />
              <span className={`${isChecked ? 'line-through' : ''}`}>{todo.label}</span>
            </>
          }
        </div>
        <div className="invisible group-hover:visible">
          {editMode &&
            <button onClick={(e) => onEditTodo(e)} type="submit" className="text-white py-2 px-2 rounded focus:outline-none">
              <Check color="#68d391" size={16} />
            </button>
          }
          {isChecked ?
            <button onClick={() => onClickDelete(todo.id)} type="button" className="text-white py-2 px-2 rounded focus:outline-none">
              <Trash color="#e53e3e" size={16} />
            </button>
            :
            <button onClick={toggleEditMode} type="button" className="text-white py-2 px-2 rounded focus:outline-none">
              <Edit2 color="#5a67d8" size={16} />
            </button>
          }
        </div>
      </div>
    </form>
  );
}