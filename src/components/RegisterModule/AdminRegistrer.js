import InputText from "../InputText";
import CancelButton from "../CancelButton";
import SaveButton from "../SaveButton";

function AdminRegister() {
    return(
        <div className="w-1/4 max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <InputText
                    label={"Nombre completo"}
                    placeholder={"Ingrese el nombre del administrador"}
                />
                <InputText
                    label={"Teléfono"}
                    placeholder={"Ingrese el teléfono del administrador"}
                />
                <InputText
                    label={"CI"}
                    placeholder={"Ingrese el carnet del administrador"}
                />
                <InputText
                    label={"E-mail"}
                    placeholder={"Ingrese el e-mail del administrador"}
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
export default AdminRegister;