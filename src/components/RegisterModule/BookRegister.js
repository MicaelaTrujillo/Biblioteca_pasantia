import InputText from "../InputText";
import InputNumber from "../InputNumber";
import CancelButton from "../CancelButton";
import SaveButton from "../SaveButton";
import DropdownAuthors from "../DropdownAuthors";
import { useState, useEffect } from "react";

function BookRegister() {
    const [authors, setAuthors] = useState([1]);

    function onClickAdd(){
        setAuthors((authors) => [...authors, {nombre_autor:""}])
    }

    useEffect(()=>{
        console.log(authors)
    }, [authors])

    return(
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <InputText
                    label={"Nombre del libro"}
                    placeholder={"Ingrese el nombre del libro"}
                />
                <InputText
                    label={"Editorial"}
                    placeholder={"Ingrese el nombre de la editorial"}
                />
                <InputNumber
                    label={"Número de copias"}
                    placeholder={"Ingrese el número de copias"}
                />
                <div>
                    <div className="flex flex-row">
                        <label className="text-left block text-gray-700 text-sm font-bold mb-2 pr-3">
                            Autor/es
                        </label>
                        <svg onClick={onClickAdd} class="h-6 w-6 text-brown-500 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    {
                        authors.length == 0?
                        <DropdownAuthors/>
                        :
                        authors.map(author => (<DropdownAuthors/>))
                    }
                    
                </div>
                <div className="flex items-center justify-between mt-7">
                    <SaveButton
                        onClick={()=>{console.log("se guardó")}}
                    />
                    <CancelButton
                        href={"#"}
                    />
                </div>
            </form>
        </div>
    );
}
export default BookRegister;