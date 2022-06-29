import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { customFetch, getCategories } from '../../../data/customFetch';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { genre } = useParams();

    useEffect(()=>{
        if(!genre) {
            customFetch()
            .then(res => setItems(res))
        } else {
            getCategories(genre)
            .then(res => setItems(res))
        }
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
            <p>Cargando elementos...</p>
        );
    }
};

export default ItemListContainer;