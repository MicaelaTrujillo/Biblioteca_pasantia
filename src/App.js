import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import ClientRegisterPage from "./pages/ClientRegisterPage";
import AdminRegisterPage from "./pages/AdminRegisterPage";
import BookRegisterPage from "./pages/BookRegisterPage";
import LoanBooksPage from "./pages/LoanBooksPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Libros" element={<Books/>}></Route>
          <Route path="/RegistroCliente" element={<ClientRegisterPage/>}></Route>
          <Route path="/RegistroAdministrador" element={<AdminRegisterPage/>}></Route>
          <Route path="/RegistroLibro" element={<BookRegisterPage/>}></Route>
          <Route path="/Prestamo" element={<LoanBooksPage/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
