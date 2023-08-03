import NavbarDefault from "../components/NavbarDefault";
import ReturnRegister from "../components/ReturnModule/ReturnRegister";

function ReturnBookPage() {
    return(
        <div>
           <NavbarDefault/>
           <div className="flex justify-center mt-24">
                <p className="text-3xl font-medium">
                DEVOLUCIONES
                </p>
            </div>
            <ReturnRegister/>
           
        </div>
    );
}
export default ReturnBookPage;