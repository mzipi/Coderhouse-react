import { useContext, useState } from 'react';
import { context } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {

    const { cart, totalPrice } = useContext(context);

    let total = 0;

    if(cart["length"] === 0){
        return(
            <div>
                <h1 className='display-6 text-black-50'>Carrito vacío</h1>
                {<Link to={"/"}>Volver al catalogo</Link>}
            </div>
        )
    } else {
        return(
            <div>
                <h1>Carrito</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Item</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        {
                            cart.map(item => {
                                total += item.price * item.cantidad;
                                return(
                                    <tbody key={item.id}>
                                        <tr>
                                            <th scope="row">{item.cantidad}</th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                        <tbody>
                            <tr>
                                <th scope="row" colSpan="2">Total</th>
                                <td>{total}</td>
                            </tr>
                        </tbody>
                    </table>
                <Link to="/checkout" className="btn btn-primary">Finalizar comprar</Link>
            </div>
        )
    }
}
export default Cart;