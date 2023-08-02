import InputText from "./InputText";
import { useEffect, useState } from 'react';

function DropdownAuthors({label,placeholder}) {
    var autores=["Mario Cabezas","Juan Maldonado", "Maria Bazualdo"];

    const [value, setValue] = useState("")
    const [valueSelect, setValueSelect] = useState(false)
    const [authorFilter, setAuthorFilter] = useState([])

    const onChange = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
    }

    const filtrar = () => {
        if(value == ""){
            setAuthorFilter([])
        }else{
            setAuthorFilter(autores.filter(lista => lista.includes(value)))
        }
    }

    function onClick(nombre){
        setValue(nombre)
        setValueSelect(true)

    }

    useEffect(()=>{
        filtrar()
    }, [value])


console.log(authorFilter)
    return(
        <div>
            <div>
                <div className="flex flex-row">
                    <label className="text-left block text-gray-700 text-sm font-bold mb-2 pr-3">
                        Autor/es
                    </label>
                    <svg class="h-6 w-6 text-brown-500 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path onClick={() => console.log("anadir")} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                
                <input value={value} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " onChange={onChange} type="text" placeholder="Ingrese nombre del autor"/>
            </div>

            <div class="absolute z-10 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div role="none">
                    {
                        !valueSelect?
                        authorFilter.map(author => (
                            <a onClick={() => onClick(author)} style={{background: '#D9D9D9' }} class="border text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{author}</a>
                        ))
                        :
                        null
                    }
                </div>
            </div>
        </div>

    );
}
export default DropdownAuthors;