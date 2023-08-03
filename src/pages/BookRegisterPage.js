import NavbarDefault from "../components/NavbarDefault";
import BookRegister from "../components/RegisterModule/BookRegister";

function BookRegisterPage() {
    return(
        <div>
            
           <NavbarDefault/>
           <div className="flex justify-center mt-24">
                <p className="text-3xl font-medium">
                REGISTRO DE LIBRO
                </p>
            </div>
           <div className="m-4 flex justify-center">
                <BookRegister/>
           </div>
           
        </div>
    );
}
export default BookRegisterPage;