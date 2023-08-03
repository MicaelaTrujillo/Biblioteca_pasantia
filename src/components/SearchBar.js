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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${isHovered ? 'text-red-600' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 15l-2-2m0 0l-2-2m2 2l2-2m-2 2l2 2m7-7a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
