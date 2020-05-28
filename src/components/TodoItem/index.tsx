import React from 'react'

interface TodoItemProps {
  label: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ label }) => {
  return (
    <div className="flex items-center">
      <input className="mr-2 leading-tight" type="checkbox" name="todo-item" id="item-0" />
      <span>{label}</span>
    </div>
  );
}