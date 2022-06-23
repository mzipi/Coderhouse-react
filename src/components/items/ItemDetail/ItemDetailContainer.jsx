import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import producto from "../../../data/catalogo";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        const detailPromise = new Promise((res)=>{
            setTimeout(()=>{
                res(producto);
            },100);
        })
        detailPromise.then(i => setItem(i))
    },[item]);

    if(item.length > 0){
        return(
            <div className="container mt-4">
                <div className="row g-2">
                    <ItemDetail item={item[id-1]} />
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