import React from 'react'

interface TodoItemProps {
  label: string;
  onCheckBoxChange: React.ChangeEventHandler;
  isChecked: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ label, onCheckBoxChange, isChecked }) => {
  return (
    <div className={`${isChecked ? 'bg-gray-200' : ''} flex items-center px-6 py-4`}>
      <input onChange={onCheckBoxChange} className="mr-2 leading-tight" type="checkbox" name="todo-item" id="item-0" />
      <span className={`${isChecked ? 'line-through' : ''}`}>{label}</span>
    </div>
  );
}