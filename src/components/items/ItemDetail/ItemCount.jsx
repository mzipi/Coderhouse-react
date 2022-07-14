import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../CartContext";

function ItemCount({ initial, item, setItem }) {
    const [ counter, setCounter ] = useState(initial);
    const { addItem, isInCart } = useContext(context);

    const sumar = () => {
        if (item.stock > 0) {
            setCounter(counter + 1);
            const aux = { ...item};
            aux.stock = item.stock - 1;
            setItem(aux);
        };
    };

    const restar = () => {
        if(counter > 0) {
            setCounter(counter - 1);
            const aux = { ...item};
            aux.stock = item.stock + 1;
            setItem(aux);
        };
    };

    const finish = () => {
        addItem(item, counter);
    }
    return(
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <button type="button" className="btn btn-primary col-1" onClick={restar}>-</button>
                    <div className="col-1">{counter}</div>
                    <button type="button" className="btn btn-primary col-1" onClick={sumar}>+</button>
                    {
                        isInCart(item.name) 
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