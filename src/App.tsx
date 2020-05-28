import React from 'react';

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-900 text-white">
      <div className="flex items-center w-1/3">
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
              <button className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">Save</button>
            </div>
          </div>
          <div className="py-4 px-6">
            test
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
