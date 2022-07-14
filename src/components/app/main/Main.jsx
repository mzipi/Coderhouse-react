import ItemListContainer from "../../items/ItemList/ItemListContainer";
import ItemDetailContainer from "../../items/ItemDetail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "../../Cart";
import Receipt from "../../Receipt";
import Form from "../../Form";

function Main() {
    return(
        <>
            <main className="p-5">
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                    <Route path="/category/:category" element={<ItemListContainer />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/receipt/:id" element={<Receipt />}></Route>
                    <Route path="/form/" element={<Form />}></Route>
                </Routes>
            </main>
        </>
    )
}
export default Main;