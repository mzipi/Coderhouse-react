import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

function App() {
    return(
        <>
            <NavBar />
            <ItemListContainer 
                greeting="Bienvenido" 
            />
        </>
    )
}

export default App; 