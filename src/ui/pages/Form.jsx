import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../api/CartContext';
import { db } from '../../api/firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';

function Form() {
    const { cart, totalPrice, cleanCart } = useContext(context);
    const [ idCompra, setIdCompra ] = useState('');
    const [ disable, setDisable ] = useState(true);
    const [ show, setShow ] = useState();

    const handleChange = (e) => {
        e.preventDefault();

        if(e.target.value) {
            setDisable(false);
        }
    }

    function handleSubmit(event) {

        event.preventDefault();

        setShow(
            <div className="spinner-border text-secondary mt-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )

        if(event.target.elements.name.value && event.target.elements.email.value && event.target.elements.tel.value) {
            if(cart.length > 0) {
                const collectionOrders = collection(db, 'orders');
                
                const orderData = {
                    buyer: {
                        name: event.target.elements.name.value,
                        phone: event.target.elements.tel.value,
                        email: event.target.elements.email.value
                    },
                    items: cart,
                    date: serverTimestamp(),
                    total: totalPrice()
                }
                
                const consulta = addDoc(collectionOrders, orderData);
                
                consulta
                    .then(res => setIdCompra(res.id))
                    .then(() => setShow(''))
                    .catch(e => alert(e));
                
                    
                    cleanCart();
                } else {
                    const message = <p className='text-danger'>No hay productos en el carro</p>;
                    setShow(message);
                    setTimeout(() => {
                        setShow('');
                    }, 3000);
                }

                event.target.elements.name.value = '';
                event.target.elements.tel.value = '';
                event.target.elements.email.value = '';
        } else {
            const message = <p className='text-danger'>Faltan datos personales</p>;
            setShow(message);
            setTimeout(() => {
                setShow('');
            }, 3000);
        }
    };


    return(
        <form onSubmit={handleSubmit} className="was-validated" noValidate>
            <legend>Datos del comprador</legend>
            <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                <input id="validationCustom01" name="name" type="text" placeholder='Juan' onChange={handleChange} required className="form-control"></input>
                <div className="invalid-feedback">Por favor ingrese su nombre</div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">Teléfono</label>
                <input type="tel"  id="validationCustom02" name="tel" pattern="[0-9]{9}" placeholder="123456789" onChange={handleChange} required className="form-control"></input>
                <div className="invalid-feedback">Por favor ingrese su teléfono</div>
            </div>
            <div className="col-md-4">
                <label htmlFor="validationCustom03" className="form-label">E-mail</label>
                <input type="email" id="validationCustom03" name="email" placeholder='juan@dominio' className='mb-2 form-control' required onChange={handleChange}></input>
                <div className="invalid-feedback">Por favor ingrese su correo</div>
            </div>
            <div className="col-12 mt-2">
                <button type="submit" disabled={disable} className="btn btn-primary" value="Finalizar compra">Finalizar compra</button> 
            </div>
            {show}
            {
                idCompra ? <Link to={`/receipt/${idCompra}`} className="mt-5 fs-5">Ver recibo</Link> : null
            }
        </form>
    )
}
export default Form;