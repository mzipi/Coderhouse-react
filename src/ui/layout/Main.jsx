import { Route, Routes } from "react-router-dom";
import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Cart from "../pages/Cart";
import Receipt from "../pages/Receipt";
import Form from "../pages/Form";

function Main() {
    return(
        <>
            <main className="p-5" style={{minHeight: "87vh"}}>
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