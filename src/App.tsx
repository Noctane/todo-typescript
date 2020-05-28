import React from 'react';

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-900 text-white">
      <div className="flex items-center">
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-500">
         <div className="px-6 py-4 border-b border-gray-300">
           <h1>Todo list</h1>
         </div>
         <div className="py-4 px-6">
           test
         </div>
       </div>
      </div>
      <p className="mt-6 tracking-wide">
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div className="mt-4 flex justify-center">
        <a
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="ml-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind
        </a>
      </div>
    </div>
  );
}

export default App;
