import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { getDoc, collection, doc } from "firebase/firestore";

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        const collectionItems = collection(db, "items");
        const docRef = doc(collectionItems, "NsW3FlVyc84OYHeqkSyk");
        const consulta = getDoc(docRef);
        consulta.then(i => {
           const product = i.data();
           setItem(product);
        });
        consulta.catch(e => console.log(e));

    },[]);

    if(item){
        return(
            <div className="container mt-4">
                <div className="row g-2">
                    <ItemDetail item={item} />
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