import { useContext, useState } from 'react';
import { context } from './CartContext';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function Cart() {

    const { cart, totalPrice } = useContext(context);
    const [ idCompra, setIdCompra ] = useState('');

    let total = 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        const collectionOrders = collection(db, 'orders');

        const orderData = {
            buyer: {
                name: e.target.elements.name.value,
                phone: e.target.elements.tel.value,
                email: e.target.elements.email.value
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        }
        
        const consulta = addDoc(collectionOrders, orderData);

        consulta
            .then(res => setIdCompra(res.id))
            .catch(e => console.log(e));
    };

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
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Datos del comprador</legend>
                            <label for="name">Nombre</label>
                            <input id="name" name="name" type="text"></input>
                            <label for="tel">Teléfono</label>
                            <input type="tel"  id="tel" name="tel" pattern="[0-9]{9}"></input>
                            <label for="email">E-mail</label>
                            <input type="email" id="email" name="email"></input>
                            <input type="submit" className="btn btn-primary" value="Finalizar compra"></input>
                        </fieldset>
                    </form>
            </div>
        )
    }
}
export default Cart;