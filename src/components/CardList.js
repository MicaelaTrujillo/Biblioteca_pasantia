
import Card from "./Card";

function CardList() {
    var libros = ["libro 1", "libro 2", "libro 3", "libro 4", "libro 5", "libro 6", "libro 5", "libro 6"];
    return(
        <div>
            <div class="m-32 grid grid-rows-1 gap-4">
                <div class="grid grid-cols-4 gap-4">
                {
                    libros.map((libro) => (
                        <div class="flex justify-center">
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