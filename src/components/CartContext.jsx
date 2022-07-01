import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

const MyProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const addItem = (item) => {
        if(!isInCart(item.id)) {
            const aux = cart.slice();
            aux.push(item);
            setCart(aux);
        } 
        if(isInCart(item.id)) {
            addQuantity(item.id)
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0)
    }

    const delCart = () => {
        setCart([])
    }

    const delQuantity = (id) => {
        const index = cart.findIndex((item) => item.id === Number(id));
        const item = cart[index];
        if(item.cantidad === 1) {
            delItem(id)
        } else {
            const newQuantity = item.cantidad - 1;
            const aux = cart.slice();
            aux[index].cantidad = newQuantity;
            setCart(aux);
        }
    }

    const addQuantity = (id) => {
        const index = cart.findIndex((item) => item.id === Number(id));
        const item = cart[index];
        if(item.cantidad < item.stock) {
            const newQuantity = item.cantidad + 1;
            const aux = cart.slice();
            aux[index].cantidad = newQuantity;
            setCart(aux);
        }
    }

    const delItem = (id) => {
        setCart(cart.filter(product => (product.id !== Number(id))));
    }

    const contexValue = {
        cart,
        addItem,
        isInCart,
        totalPrice,
        totalQuantity,
        delCart,
        delQuantity,
        addQuantity,
        delItem
    }

    return(
        <Provider value={contexValue}>
            {children}
        </Provider>
    )
}

export default MyProvider;