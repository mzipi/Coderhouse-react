import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import producto from "../../../data/catalogo";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        //const collectionItems = collection(db, "items");
        //const consulta = getDocs(collectionItems);
        //consulta.then(i => {
        //    const mapProducts = i.docs.map(doc => {
        //        const aux = doc.data();
        //        aux.id = doc.id;
        //        return aux;
        //    })
        //    setItem(mapProducts);
        //});
        //consulta.catch(e => console.log(e));

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
            <p>Cargando detalles...</p>
        );
    }
};

export default ItemDetailContainer;