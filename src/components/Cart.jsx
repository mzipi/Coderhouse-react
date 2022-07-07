import { useContext, useState } from 'react';
import { context } from './CartContext';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function Cart() {

    const { cart, totalPrice } = useContext(context);
    const [ idCompra, setIdCompra ] = useState('');

    let total = 0;

    const handleBuy = () => {
        const collectionOrders = collection(db, 'orders');

        const orderData = {
            buyer: {
                name: 'Juan',
                phone: '123456789',
                email: 'algo@mail.com'
            },
            items: {
                id: 231,
                name: 'Producto'
            },
            date: serverTimestamp(),
            total: 124
        }

        const consulta = addDoc(collectionOrders, orderData);
        consulta
            .then((res) => {setIdCompra(res.id)})
            .catch((e) => {console.log(e)});
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
                <Link to="/checkout" className="btn btn-primary" onClick={handleBuy}>Finalizar comprar</Link>
            </div>
        )
    }
}
export default Cart;