import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import catalogo from "../../../data/catalogo";

function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(catalogo);
            },2000);
        })
        promesa.then(r => setItems(r))
    },[items]);

    if(items.length > 0){
        return(
            <div className="container mt-4">
                <div className="row g-2">
                    <ItemList items={items}/>
                </div>
            </div>
        );
    } else {
        return(
            <>
                <p>Cargando items...</p>
            </>
        );
    }
};

export default ItemListContainer;