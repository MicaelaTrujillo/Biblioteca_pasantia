
import { useState, useEffect } from "react";

function ClientData() {
    const [client,setClient] = useState({nombre_cliente: "Juan Montecinos", telefono_cliente: "65487985", carnet_cliente: "6878441"})

    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center text-sm font-light">
                        <thead
                            className="border-b bg-yellow-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                            <tr>
                                <th scope="col" className=" px-6 py-4">Nombre</th>
                                <th scope="col" className=" px-6 py-4">Teléfono</th>
                                <th scope="col" className=" px-6 py-4">C.I.</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4">{client.nombre_cliente}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{client.telefono_cliente}</td>
                            <td className="whitespace-nowrap  px-6 py-4">{client.carnet_cliente}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
    );
}
export default ClientData;
