
import BookModal from "./BookModal";
import { useState } from "react";

function Card() {
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="w-40 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a onClick={() => setShowModal(true)}>
                <img className="w-full h-3/4" src="https://marketplace.canva.com/EAFI171fL0M/1/0/1003w/canva-portada-de-libro-de-novela-ilustrado-color-azul-aqua-PQeWaiiK0aA.jpg" alt="" />
            </a>
            <div className="p-2">
                <a onClick={() => setShowModal(true)}>
                    <h5 className="mb-2 text-2 font-bold tracking-tight text-gray-900 dark:text-white">Hasta que el verano se acabe</h5>
                </a>
            </div>
            <BookModal
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </div>
    );
}
export default Card;
