import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import catalogo from "../../../data/catalogo";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { getDocs, collection } from "firebase/firestore";

function ItemListContainer() {

    const [items, setItems] = useState([]);
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
        //    setItems(mapProducts);
        //});
        //consulta.catch(e => console.log(e));
        
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