import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../api/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(()=>{

        if(category) {
            const q = query(collection(db, "items"), where("category", "==", category));
            const querySnapshot = getDocs(q);
            queryFunction(querySnapshot);
        } else {
            const querySnapshot = getDocs(collection(db, "items"));
            queryFunction(querySnapshot);
        }

        function queryFunction(querySnapshot) {
            querySnapshot.then((resultado) => {
                const productos_mapeados = resultado.docs.map(referencia => {                   
                    const aux = referencia.data();
                    aux.id = referencia.id;
                    return aux;
                })
                setItems(productos_mapeados);
            })
            querySnapshot.catch((error) => alert(error));
        }

    },[category]);

    if(items){
        return(
            <div className="container mt-4">
                {
                    category ? <h2>Categoría {category}</h2> : null 
                }
                <div className="row g-2">
                    <ItemList items={items}/>
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

export default ItemListContainer;