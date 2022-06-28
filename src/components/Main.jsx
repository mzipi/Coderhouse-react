import ItemListContainer from "./Item/ItemList/ItemListContainer";
import ItemDetailContainer from "./Item/ItemDetail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

function Main() {
    return(
        <>
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                    <Route path="/category/:category" element={<ItemListContainer />}></Route>
                </Routes>
            </main>
        </>
    )
}
export default Main;