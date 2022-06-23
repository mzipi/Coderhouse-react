import ItemCount from "../../Item/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({item}) {

    function onAdd(counter) {
        console.log(counter);
    }

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light col-3" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <ItemCount onAdd={onAdd} initial={1} stock={5}></ItemCount>
                <Link to={"/cart"}>Terminar</Link>
            </div>
        </>
    );
};
export default ItemDetail;