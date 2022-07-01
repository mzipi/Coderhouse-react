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
        } else {
            addQuantity(item.id)
        }
    }

    const isInCart = (id) => {
        return cart.some((current) => current.id === id);
    }

    const totalPrice = () => {
        return cart.price.reduce((prev, current) => prev += (current.precio * current.cantidad), 0)
    }

    const totalQuantity = () => {
        return cart.reduce((prev, current) => prev += current.cantidad, 0)
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
        setCart(cart.filter(currentuct => (currentuct.id !== Number(id))));
    }

    const contexValue = {
        cart,
        addItem,
        isInCart,
        totalQuantity,
        totalPrice,
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