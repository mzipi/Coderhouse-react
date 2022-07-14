import { useContext } from 'react';
import { context } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {

    const { cart } = useContext(context);

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
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {
                        cart.map(item => {
                            return(
                                <tbody key={item.name}>
                                    <tr>
                                        <th scope="row">{item.cantidad}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price * item.cantidad}</td>
                                        <td><button className='btn btn-close'></button></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    <tbody>
                        <tr>
                            <th scope="row" colSpan="2">Total</th>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={"/form"} className="btn btn-primary">Continuar la compra</Link>
            </div>
        )
    }
}
export default Cart;