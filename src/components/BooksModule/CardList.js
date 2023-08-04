
import { useEffect, useState } from "react";
import Card from "./Card";
import ApiService from "../../services/api.service";

function CardList() {

    const [authors,setAuthors] = useState([])
    const loadAuthors = async () => {
        const response = await ApiService.getAuthors()
        if(response.status == 200){
            setAuthors(response.data)
            console.log(response.data)
        }else{
            console.log("No se reciben los datos")
        }
    }

    useEffect(() => {
        loadAuthors()
    },[])

    var libros = ["libro 1", "libro 2", "libro 3", "libro 4", "libro 5", "libro 6", "libro 5", "libro 6"];
    return(
        <div>
            <div className="m-28 grid grid-rows-1 gap-4">
                <div className="grid grid-cols-4 gap-4">
                {
                    libros.map((libro) => (
                        <div className="flex justify-center">
                            <Card/>
                        </div>
                    ))
                }
                </div>
            </div>
            
        </div>
    );
}
export default CardList;