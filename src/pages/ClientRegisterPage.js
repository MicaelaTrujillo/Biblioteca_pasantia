import NavbarDefault from "../components/NavbarDefault";
import ClientRegister from "../components/RegisterModule/ClientRegister";

function ClientRegisterPage() {
    return(
        <div>
            
           <NavbarDefault/>
           <div className="flex justify-center mt-24">
                <p className="text-3xl font-medium">
                REGISTRO DE CLIENTE
                </p>
            </div>
           <div className="m-4 flex justify-center">
                <ClientRegister/>
           </div>
           
        </div>
    );
}
export default ClientRegisterPage;