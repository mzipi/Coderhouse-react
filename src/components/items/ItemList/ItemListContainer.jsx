import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { category } = useParams();

    useEffect(()=>{

        if(category) {
            categoria()
        } else {
            inicio()
        }

        function inicio() {
            const querySnapshot = getDocs(collection(db, "items"));
            querySnapshot
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
        }

        function categoria() {
            const q = query(collection(db, "items"), where("category", "==", category));
            const querySnapshot = getDocs(q);
            querySnapshot
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
            <>
                <p>Cargando elementos...</p>
            </>
        );
    }
};

export default ItemListContainer;