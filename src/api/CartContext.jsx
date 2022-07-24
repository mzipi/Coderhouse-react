import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

const MyProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);
    const [ counter, setCounter ] = useState(1);

    const addItem = (item) => {
        const auxCart = [...cart];
        auxCart.push(item);
        setCart(auxCart);
    }

    const itemQuantity = (item) => {
        const auxItem = {
            ...item,
            quantity: counter
        }
        return auxItem;
    }
    
    const isInCart = ({name}) => {
        return cart.some((current) => current.name === name);
    }

    const upQuantity = (item) => {
        const auxCart = cart.findIndex((cartItem) => cartItem.name === item.name);
        cart[auxCart].quantity = item.quantity + 1;
        cart[auxCart].stock = item.stock - 1;
    }

    const downQuantity = (item) => {
        const auxCart = cart.findIndex((cartItem) => cartItem.name === item.name);
        cart[auxCart].quantity = item.quantity - 1;
        cart[auxCart].stock = item.stock + 1;
    }


    const totalQuantity = () => {
        const x = cart.map(item => item.quantity);
        return x.reduce((a, b) => a + b, 0);
    }

    const totalPrice = () => {
        const x = cart.map(item => {
            return item.price * item.cantidad;
        });
        return x.reduce((a, b) => a + b, 0);
    }

    const delItem = ({name}) => {
        setCart(cart.filter(product => (product.name !== name)));
    }

    const cleanCart = () => {
        const a = [];
        setCart(a);
    }

    const contexValue = {
        cart,
        setCart,
        addItem,
        totalQuantity,
        totalPrice, 
        isInCart,
        delItem,
        cleanCart,
        counter,
        setCounter,
        itemQuantity,
        upQuantity,
        downQuantity
    }

    return(
        <Provider value={contexValue}>
            {children}
        </Provider>
    )
}

export default MyProvider;