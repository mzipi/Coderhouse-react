import ItemCount from "./ItemCount";
import { useContext } from "react";
import { context } from "../../api/CartContext";

function ItemDetail({item, setItem}) {

    const { cart, inCart } = useContext(context);

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light card" style={{width: '38rem'}} key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="row align-items-center">
                {
                    inCart(item)
                    ?
                    <p className="col-3 text-center">Stock: {cart.find(itemCart => itemCart.name === item.name).stock}</p>
                    :
                    <p className="col-3 text-center">Stock: {item.stock}</p>
                }
                    <p className="col text-center fs-3">${item.price}</p>
                </div>
                <ItemCount 
                    item={item}
                    setItem={setItem}>
                </ItemCount>    
            </div>
        </>
    );
};
export default ItemDetail;