import ItemListContainer from "./Item/ItemList/ItemListContainer";
import ItemDetailContainer from "./Item/ItemDetail/ItemDetailContainer";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <ItemListContainer />
                <ItemDetailContainer />
            </BrowserRouter>
        </>
    )
}

export default App; 