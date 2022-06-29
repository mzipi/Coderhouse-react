import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import ItemListContainer from "../Item/ItemList/ItemListContainer";
import ItemDetailContainer from "../Item/ItemDetail/ItemDetailContainer";

function App() {
    return(
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                    <Route path="/category/:genre" element={<ItemListContainer />}></Route>
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App; 