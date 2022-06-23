import ItemListContainer from "../../items/ItemList/ItemListContainer";
import ItemDetailContainer from "../../items/ItemDetail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Cart";

function Main() {
    return(
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                    <Route path="/category/:id" element={<ItemListContainer />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </main>
        </>
    )
}
export default Main;