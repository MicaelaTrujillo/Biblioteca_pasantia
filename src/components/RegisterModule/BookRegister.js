import InputText from "../InputText";
import InputNumber from "../InputNumber";
import CancelButton from "../CancelButton";
import SaveButton from "../SaveButton";
import DropdownAuthors from "../DropdownAuthors";

function BookRegister() {
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
                    <DropdownAuthors/>
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