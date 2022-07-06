import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(()=>{
        const collectionProductos = collection(db, "items");
        const consulta = getDocs(collectionProductos);

        consulta
            .then((resultado) => {
                const productos_mapeados = resultado.docs.map(referencia => {
                    const aux = referencia.data();
                    aux.id = referencia.id;
                    return aux;
                })
                setItems(productos_mapeados);
            })
            .catch((error) => {
                console.log(error)
            });
    },[category]);


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