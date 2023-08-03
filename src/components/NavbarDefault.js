import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const NavbarDefault = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-0 px-6 bg-yellow-500">
      <div className="flex items-center justify-between">
        <div className="flex">
          <h1 className="text-2xl font-bold text-white">Biblioteca</h1>
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <button onClick={()=>(navigate("/"))} className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-0 text-2xl material-icons">home</i>
            Inicio
          </button>
          <button
            className="relative flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <i className="mb-0 text-2xl material-icons">person</i>
            Registro
            {isDropdownOpen && (
              <div className="absolute w-40 mt-16 bg-yellow-500 rounded shadow-lg">
                <p onClick={()=>(navigate("/RegistroCliente"))} className="px-4 py-2 hover:bg-yellow-400">Registro Cliente</p>
                <p onClick={()=>(navigate("/RegistroLibro"))} className="px-4 py-2 hover:bg-yellow-400">Registro Libros</p>
              </div>
            )}
          </button>
          <button onClick={()=>(navigate("/Libros"))} className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-0 text-2xl material-icons">book</i>
            Libros
          </button>
          <button onClick={()=>(navigate("/Prestamo"))} className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-0 text-2xl material-icons">library_books</i> {/* Icono para "Préstamo" */}
            Préstamo
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-0 text-2xl material-icons">history</i>
            Devoluciones
          </button>
          <button className="flex flex-col items-center px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="mb-0 text-2xl material-icons">exit_to_app</i>
            Salir
          </button>
        </div>
        {/* Mobile menu (optional) */}
        <div className="flex space-x-4 md:hidden">
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">home</i>
            Inicio
          </button>
          <button
            className="relative px-4 py-2 text-white transition-all rounded hover:bg-yellow-400"
            onClick={toggleDropdown}
          >
            <i className="material-icons">person</i>
            Registro
            {isDropdownOpen && (
              <div className="absolute w- mt-2 bg-yellow-500 rounded shadow-lg">
                <p className="px-4 py-2 hover:bg-yellow-400">Registro Cliente</p>
                <p className="px-4 py-2 hover:bg-yellow-400">Registro Libros</p>
              </div>
            )}
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">book</i>
            Libros
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">library_books</i> {/* Icono para "Préstamo" */}
            Préstamo
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">history</i>
            Devoluciones
          </button>
          <button className="px-4 py-2 text-white transition-all rounded hover:bg-yellow-400">
            <i className="material-icons">exit_to_app</i>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDefault;
