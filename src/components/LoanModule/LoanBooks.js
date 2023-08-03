
import { useState } from "react";
import SearchBar from "../SearchBar";
import ClientData from "./ClientData";
import BooksList from "./BooksList";
import SaveButton from "../SaveButton";
import CancelButton from "../CancelButton";

function LoanBooks() {
    return(
        <div className="flex justify-center">
            <div className="w-9/12">
                <div className="flex justify-start">
                        <p className="text-3xl font-medium">
                        Datos del cliente
                        </p>
                </div>
                <SearchBar/>
                <ClientData/>
                
                <div className="flex justify-start">
                    <p className="text-3xl font-medium">
                    Libros
                    </p>
                </div>
                <SearchBar/>
                <BooksList/>
                <div className="flex justify-center">
                    <div className="w-1/4 flex justify-between">
                        <SaveButton/>
                        <CancelButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoanBooks;