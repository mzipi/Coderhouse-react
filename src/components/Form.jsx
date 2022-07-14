import { useContext, useState } from 'react';
import { context } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function Form() {
    const { cart, totalPrice, cleanCart } = useContext(context);
    const [ idCompra, setIdCompra ] = useState('');
    let navigate = useNavigate();

    const t = totalPrice();

    async function handleSubmit(event) {

        event.preventDefault();

        
        if(event.target.elements.name.value || event.target.elements.email.value || event.target.elements.tel.value) {
            const collectionOrders = collection(db, 'orders');
            
            const orderData = {
                buyer: {
                    name: event.target.elements.name.value,
                    phone: event.target.elements.tel.value,
                    email: event.target.elements.email.value
                },
                items: cart,
                date: serverTimestamp(),
                total: t
            }
            
            const consulta = addDoc(collectionOrders, orderData);
            
            consulta
            .then(res => setIdCompra(res.id))
            .catch(e => console.log(e));
            
            event.target.elements.name.value = '';
            event.target.elements.tel.value = '';
            event.target.elements.email.value = '';
            //navigate(`/receipt/${idCompra}`, { replace: true });
            cleanCart();
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <fieldset className="d-grid py-5 col-5">
                <legend>Datos del comprador</legend>
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" placeholder='Juan'></input>
                <label htmlFor="tel">Teléfono</label>
                <input type="tel"  id="tel" name="tel" pattern="[0-9]{9}" placeholder="123456789"></input>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder='juan@dominio'></input>
                <button type="submit" className="btn btn-primary mt-3" value="Finalizar compra">Finalizar compra</button> 
                {
                    idCompra ? <Link to={`/receipt/${idCompra}`} className="btn btn-primary mt-3">Ver recibo</Link> : null
                }
            </fieldset>
        </form>
    )
}
export default Form;