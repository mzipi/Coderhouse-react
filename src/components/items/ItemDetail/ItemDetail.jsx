import { useContext } from "react";
import { context } from "../../CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({item}) {

    const { update } = useContext(context);

    function onAdd(counter) {
        update(counter, item);
    }

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light col-3" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <ItemCount onAdd={onAdd} initial={0} stock={5}></ItemCount>
                <Link to={"/cart"}>Terminar</Link>
            </div>
        </>
    );
};
export default ItemDetail;