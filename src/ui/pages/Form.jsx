import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../api/CartContext';
import { db } from '../../api/firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function Form() {
    const { cart, totalPrice, cleanCart } = useContext(context);
    const [ idCompra, setIdCompra ] = useState('');
    const [ state, setState ] = useState(false);
    const [ msg, setMsg ] = useState();
    const t = totalPrice();

    const handleChange = (e) => {
        
    }

    function handleSubmit(event) {

        event.preventDefault();
        
        if(event.target.elements.name.value && event.target.elements.email.value && event.target.elements.tel.value) {
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
            cleanCart();
        } else {
            const message = <p className='text-danger'>Faltan datos</p>;
            setMsg(message);
            setTimeout(() => {
                setMsg('');
            }, 3000);
        }
    };


    return(
        <form onSubmit={handleSubmit}>
            <fieldset className="d-grid py-5 col-5">
                <legend>Datos del comprador</legend>
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" placeholder='Juan' onChange={handleChange}></input>
                <label htmlFor="tel">Teléfono</label>
                <input type="tel"  id="tel" name="tel" pattern="[0-9]{9}" placeholder="123456789" onChange={handleChange}></input>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder='juan@dominio' className='mb-2' onChange={handleChange}></input>
                {msg}
                <button type="submit" disabled={state} className="btn btn-primary" value="Finalizar compra">Finalizar compra</button> 
                {
                    idCompra ? <Link to={`/receipt/${idCompra}`} className="btn btn-primary mt-3">Ver recibo</Link> : null
                }
            </fieldset>
        </form>
    )
}
export default Form;