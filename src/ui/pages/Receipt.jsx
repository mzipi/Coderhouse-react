import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../api/firebase';
import { getDoc, collection, doc } from "firebase/firestore";

function Receipt() {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const [receipt, setReceipt] = useState();

    useEffect(() => {
        const docRef = doc(collection(db, "orders"), id);
        const consulta = getDoc(docRef);
        consulta.then(i => {
            const product = i.data();
            const receiptId = i.id;
            setItem(product);
            setReceipt(receiptId);
        });
        consulta.catch(e => alert(e));
    }, [id]);

    const buyer = {...item.buyer};
    const items = {...item.items};
    const game = Object.values(items);

    return(
        <div>
            <h1>Recibo</h1>
            <p>{receipt}</p>
            <p>Nombre: {buyer.name}</p>
            <p>Tel.: {buyer.phone}</p>
            <p>E-mail: {buyer.email}</p>
            {
                game.length > 1 ? <p>Productos:</p> : <p>Producto:</p>
            }
            <ul>
            {
                game.map(i => <li key={i.name}>{i.name} x{i.quantity}</li>)
            }
            </ul>
            <p>Total de la compra: ${item.total}</p>
        </div>
    )
}
export default Receipt;