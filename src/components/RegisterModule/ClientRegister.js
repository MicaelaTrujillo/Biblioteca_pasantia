import InputText from "../InputText";
import CancelButton from "../CancelButton";
import SaveButton from "../SaveButton";

function ClientRegister() {
    return(
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <InputText
                    label={"Nombre completo"}
                    placeholder={"Ingrese el nombre del cliente"}
                />
                <InputText
                    label={"Teléfono"}
                    placeholder={"Ingrese el teléfono del cliente"}
                />
                <InputText
                    label={"CI"}
                    placeholder={"Ingrese el carnet del cliente"}
                />
                <div className="flex items-center justify-between">
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
export default ClientRegister;