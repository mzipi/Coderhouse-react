import ItemListContainer from "./Item/ItemList/ItemListContainer";
import ItemDetailContainer from "./Item/ItemDetail/ItemDetailContainer";
import NavBar from "./NavBar";

function App() {
    return(
        <>
            <NavBar />
            <ItemListContainer />
            <ItemDetailContainer />
        </>
    )
}

export default App; 