import NavbarDefault from "../components/NavbarDefault";
import LoanBooks from "../components/LoanModule/LoanBooks";

function LoanBooksPage() {
    return(
        <div>
           <NavbarDefault/>
           <div className="flex justify-center mt-24">
                <p className="text-3xl font-medium">
                REGISTRO DE PRESTAMO
                </p>
            </div>
            <LoanBooks/>
           
        </div>
    );
}
export default LoanBooksPage;