import NavbarDefault from "../components/NavbarDefault";
import AdminRegister from "../components/RegisterModule/AdminRegistrer";

function AdminRegisterPage() {
    return(
        <div>
            
           <NavbarDefault/>
           <div className="flex justify-center mt-24">
                <p className="text-3xl font-medium">
                REGISTRO DE ADMINISTRADOR
                </p>
            </div>
           <div className="m-4 flex justify-center">
                <AdminRegister/>
           </div>
           
        </div>
    );
}
export default AdminRegisterPage;