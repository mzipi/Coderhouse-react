import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { context } from "../../api/CartContext";

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();
    const { itemQuantity } = useContext(context);

    useEffect(()=>{
        const docRef = doc(collection(db, "items"), id);
        const consulta = getDoc(docRef);
        consulta.then(i => {
            const product = i.data();
            product.id = i.id;
            const newProduct = itemQuantity(product);
            setItem(newProduct);
        });
        consulta.catch(e => console.log(e));
    },[id]);

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
            <div className="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );
    }
};

export default ItemDetailContainer;