import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { context } from "../../api/CartContext";

function ItemCount({item, setItem }) {
    const { addItem, inCart, cart, upQty, downQty } = useContext(context);
    const [ show, setShow ] = useState();

    const up = () => {
        if (item.stock > 0) {
            if(inCart(item)){
                upQty(item);
            } 
            const auxItem = {...item};
            auxItem.quantity++;
            auxItem.stock--;
            setItem(auxItem);
        } else {
            setShow(<p className="text-danger mt-3 mb-0">No hay suficiente stock</p>);
            setTimeout(() => {
                setShow(null);
            }, 3000);
        }
    };
    
    const down = () => {
        if(inCart(item)){
            downQty(item);
        } 
        if (item.quantity > 0) {
            const auxItem = {...item};
            auxItem.quantity--;
            auxItem.stock++;
            setItem(auxItem);
        }
        if(item.quantity < 1){
            setShow(<p className="text-danger mt-3 mb-0">No se pueden descontar más items</p>);
            setTimeout(() => {
                setShow(null);
            }, 3000);
        }
    };
    
    const finish = () => {
        if(item.quantity > 0){
            addItem(item);
        } else {
            setShow(<p className="text-danger mt-3 mb-0">No se puede agregar 0 items al carro</p>);
            setTimeout(() => {
                setShow(null);
            }, 3000);
        }
    }

    return(
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <button type="button" className="btn btn-primary col-1" onClick={down}>-</button>
                    <div className="col-1">
                    {
                        inCart(item)
                        ?
                        cart.find(itemCart => itemCart.name === item.name).quantity
                        :
                        item.quantity
                    }
                    </div>
                    <button type="button" className="btn btn-primary col-1" onClick={up}>+</button>
                    {
                        inCart(item) 
                        ? 
                        <Link to={"/cart"} className="btn btn-primary col ms-3">Ver carrito</Link> 
                        :
                        <button type="button" className="btn btn-primary col ms-3" onClick={finish}>Agregar al carro</button>
                    }
                    {show}
                </div>
                <div className="row mt-3">
                </div>
            </div>
        </div>
    )  
};
export default ItemCount;