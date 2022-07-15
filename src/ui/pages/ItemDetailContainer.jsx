import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        const docRef = doc(collection(db, "items"), id);
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
                    <ItemDetail item={item} setItem={setItem}/>
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