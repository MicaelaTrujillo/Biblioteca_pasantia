import React, { useState } from 'react';

const SearchBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSearch = () => {
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Realizando búsqueda...');
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-300"
        placeholder="Buscar..."
      />
      <button
        className="absolute top-0 right-0 h-full px-3 py-2 text-gray-600"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSearch}
      >
        <svg class="h-6 w-6 text-yellow-800"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="10" cy="10" r="7" />  
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
      </button>
    </div>
  );
};

export default SearchBar;
