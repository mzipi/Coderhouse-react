import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { getGames } from '../../../data/customFetch';

function ItemDetailContainer() {

    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(()=>{
        getGames(parseInt(id))
        .then(res => setItem(res))
    },[]);

    //if(item.length > 0){
        return(
            <div className="container mt-4">
                <div className="row g-2">
                    <ItemDetail {...item} />
                </div>
            </div>
        );
    //} else {
    //    return(
    //        <p>Cargando detalles...</p>
    //    );
    //}
};

export default ItemDetailContainer;