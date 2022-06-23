import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import catalogo from "../../../data/catalogo";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(catalogo);
            },100);
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
                <p>Cargando elementos...</p>
            </>
        );
    }
};

export default ItemListContainer;