import React, { useState } from 'react';

const NavbarDefault = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-6 bg-yellow-500"> {/* Ajustamos el padding para hacer el Navbar más grande */}
      <div className="flex items-center justify-between"> {/* Utilizamos flexbox para alinear los elementos */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Biblioteca</h1> {/* Ajustamos el tamaño del texto */}
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <button className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-2 text-2xl material-icons">home</i> {/* Ajustamos el tamaño del icono */}
            Inicio
          </button>
          <button
            className="relative flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <i className="mb-2 text-2xl material-icons">person</i> {/* Ajustamos el tamaño del icono */}
            Registro
            {isDropdownOpen && (
              <div className="absolute w-40 mt-20 bg-yellow-500 rounded shadow-lg"> {/* Ajustamos la distancia desde la parte superior */}
                <p className="px-4 py-2 hover:bg-yellow-400">Registro Cliente</p>
                <p className="px-4 py-2 hover:bg-yellow-400">Registro Libros</p>
              </div>
            )}
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-2 text-2xl material-icons">book</i> {/* Ajustamos el tamaño del icono */}
            Libros
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-2 text-2xl material-icons">history</i> {/* Ajustamos el tamaño del icono */}
            Devoluciones
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-2 text-2xl material-icons">exit_to_app</i> {/* Ajustamos el tamaño del icono */}
            Salir
          </button>
        </div>
        {/* Mobile menu (optional) */}
        <div className="flex space-x-4 md:hidden">
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">home</i> Inicio
          </button>
          <button
            className="relative px-4 py-2 text-white transition-all rounded hover:bg-yellow-400"
            onClick={toggleDropdown}
          >
            <i className="material-icons">person</i> Registro
            {isDropdownOpen && (
              <div className="absolute w-40 mt-3 bg-yellow-500 rounded shadow-lg"> {/* Ajustamos la distancia desde la parte superior */}
                <p className="px-4 py-2 hover:bg-yellow-400">Registro Cliente</p>
                <p className="px-4 py-2 hover:bg-yellow-400">Registro Libros</p>
              </div>
            )}
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">book</i> Libros
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">history</i> Devoluciones
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">exit_to_app</i> Salir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDefault;
