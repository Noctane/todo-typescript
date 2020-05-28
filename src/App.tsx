import React from 'react';
import { TodoList } from './features/TodoList';

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-900 text-white">
      <div className="flex items-center w-1/3">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
