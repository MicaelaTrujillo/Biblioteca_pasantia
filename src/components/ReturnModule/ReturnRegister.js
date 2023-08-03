/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBar from "../SearchBar";
import SaveButton from "../SaveButton";
import CancelButton from "../CancelButton";

function ReturnRegister() {
  const [searchValue, setSearchValue] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [clientData, setClientData] = useState({
    nombre_cliente: "Juan Montecinos",
    fecha_prestamo: "2023-08-10", // Cambiar aquí por la fecha actual o cualquier fecha deseada
    isCarnetChecked: false, // Cambiar a true si se desea que el checkbox esté marcado inicialmente
  });

  const handleSearch = (value) => {
    setSearchValue(value);
    // Aquí podrías implementar la lógica para filtrar los datos del cliente en base al valor de búsqueda
  };

  const handleCarnetCheckbox = () => {
    setClientData((prevData) => ({
      ...prevData,
      isCarnetChecked: !prevData.isCarnetChecked,
    }));
  };

  const handleSelectAllCheckbox = () => {
    setSelectAll(!selectAll);
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
        <div className="flex items-center justify-between"> {/* Modificar el contenedor del buscador y el checkbox "Todos" */}
          <SearchBar
            value={searchValue}
            onChange={handleSearch}
            placeholder="Buscar cliente..."
          />
          <label className="flex items-center ml-4">
            <input
              type="checkbox"
              className="w-5 h-5 text-green-600 form-checkbox"
              checked={selectAll}
              onChange={handleSelectAllCheckbox}
            />
            <span className="ml-2 text-sm text-gray-600">Todos</span>
          </label>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm font-light text-center">
            <thead className="font-medium text-white bg-yellow-800 border-b">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-4">
                  Fecha del Prestamo
                </th>
                <th scope="col" className="px-6 py-4">
                  Opción
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap">
                  {clientData.nombre_cliente}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {clientData.fecha_prestamo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-green-600 form-checkbox"
                      checked={selectAll || clientData.isCarnetChecked}
                      onChange={handleCarnetCheckbox}
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex justify-between w-1/4">
            <SaveButton />
            <CancelButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnRegister;