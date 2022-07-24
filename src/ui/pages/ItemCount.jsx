import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../api/CartContext";

function ItemCount({ initial, item, setItem }) {
    const { addItem, isInCart, counter, setCounter, cart, upQuantity, delItem, downQuantity } = useContext(context);
    
    const sumar = () => {
        if (item.stock > 0) {
            setCounter(counter + 1);
            if(isInCart(item)) {
                upQuantity(item);
            } else {
                const auxItem = {...item};
                auxItem.quantity = item.quantity + 1;
                auxItem.stock = item.stock - 1;
                setItem(auxItem);
            }
        };
    };
    
    const restar = () => {
        if(counter > 1) {
            setCounter(counter - 1);
            if(isInCart(item)) {
                downQuantity(item);
            }
        }
        if(counter === 1) {
            delItem(item);
        }
    };
    
    const finish = () => {
        addItem(item);
    }

    console.log("El cart contiene: ", cart);
    
    return(
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <button type="button" className="btn btn-primary col-1" onClick={restar}>-</button>
                    <div className="col-1">{ item.quantity }</div>
                    <button type="button" className="btn btn-primary col-1" onClick={sumar}>+</button>
                    {
                        isInCart(item) 
                        ? 
                        <Link to={"/cart"} className="btn btn-primary col ms-3">Ver carrito</Link> 
                        :
                        <button type="button" className="btn btn-primary col ms-3" onClick={finish}>Agregar al carro</button>
                    } 
                </div>
                <div className="row mt-3">
                </div>
            </div>
        </div>
    )
};
export default ItemCount;