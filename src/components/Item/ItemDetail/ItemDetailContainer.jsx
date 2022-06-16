import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import producto from "../../../data/catalogo.js";

function ItemDetailContainer() {

    const [item, setItem] = useState({});

    useEffect(()=>{
        const detailPromise = new Promise((res)=>{
            setTimeout(()=>{
                res(producto);
            },4000);
        })
        detailPromise.then(i => setItem(i))
    },[item]);

    if(item.length > 0){
        return(
            <div className="container mt-4">
                <div className="row g-2">
                    <ItemDetail item={item[2]}/>
                </div>
            </div>
        );
    } else {
        return(
            <>
                <p>Cargando detalles...</p>
            </>
        );
    }
};

export default ItemDetailContainer;