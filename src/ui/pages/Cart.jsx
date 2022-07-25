import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../api/CartContext';

function Cart() {

    const { cart, delItem, totalPrice } = useContext(context);

    const quitar = (item) => () => {
        delItem(item)
    }

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
                <table className="table table-hover">
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
                                        <td>{item.quantity}</td>
                                        <td><Link to={`/item/${item.id}`} className="nav-link text-primary">{item.name}</Link></td>
                                        <td>{item.price * item.quantity}</td>
                                        <td><button className='btn btn-close' onClick={quitar(item)}></button></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    <tbody>
                        <tr>
                            <th scope="row" colSpan="2">Total</th>
                            <td colSpan="2">{totalPrice()}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={"/form"} className="btn btn-primary">Terminar la compra</Link>
            </div>
        )
    }
}
export default Cart;