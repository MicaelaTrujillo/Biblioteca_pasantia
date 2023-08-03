
import React from 'react';

const App = () => {
  return (
    <div className="flex items-center p-2 bg-white rounded-md shadow-md">
      <input
        type="text"
        placeholder="Buscar..."
        className="flex-1 p-2 outline-none"
      />
      <button className="px-3 py-2 text-white bg-blue-500 rounded-md">
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};

export default App;
