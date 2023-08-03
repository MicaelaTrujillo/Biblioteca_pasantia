import NavbarDefault from "../components/NavbarDefault";

function Home() {
    return(
        <div>
           <NavbarDefault/>
           <div className="flex justify-center m-40">
            <figure class="max-w-lg">
                    <img class="max-w-full rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Biblioteca_Barzio.jpg/1200px-Biblioteca_Barzio.jpg" alt="image description"/>
                </figure>
           </div>
            

        </div>
    );
}
export default Home;