import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer(props) {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        const promesa = new Promise((res)=>{
            setTimeout(()=>{
                console.log("Cargando catalogo...");
                const catalogo = ["Half Life", "Halo", "Super Mario Bros"];
                res(catalogo);
            },2000);
        })
        promesa.then(catalogo => {
            setItems(catalogo);
        })
    },[]);

    if(items){
        return(
            <>
                <p className="fs-2">{props.greeting}</p>
                <ItemList />
            </>
        );
    } else {
        return(
            <>
                <p className="fs-2">{props.greeting}</p>
                <p>Cargando...</p>
            </>
        );
    }
};

export default ItemListContainer;