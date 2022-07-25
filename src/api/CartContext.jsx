import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

const MyProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addItem = (item) => {
        const auxCart = [...cart];
        auxCart.push(item);
        setCart(auxCart);
    }

    const delItem = ({name}) => {
        setCart(cart.filter(product => (product.name !== name)));
    }
    
    const itemQuantity = (item) => {
        const auxItem = {
            ...item,
            quantity: 0
        }
        return auxItem;
    }
    
    const inCart = ({name}) => {
        return cart.some((current) => current.name === name);
    }

    const upQty = (item) => {
        const i = cart.findIndex((cartItem) => cartItem.name === item.name);
        const auxCart = [...cart];
        auxCart[i].quantity++;
        auxCart[i].stock--;
        setCart(auxCart);
    }

    const downQty = (item) => {
        const i = cart.findIndex((cartItem) => cartItem.name === item.name);
        const auxCart = [...cart];
        auxCart[i].quantity--;
        auxCart[i].stock++;
        setCart(auxCart);
    }

    // const downQty = (item) => {
    //     const i = cart.findIndex((cartItem) => cartItem.name === item.name);
    //     if(cart[i].quantity > 0) {
    //         const auxCart = [...cart];
    //         auxCart[i].quantity--;
    //         auxCart[i].stock++;
    //         setCart(auxCart);
    //     }
    //     if(cart[i].quantity < 1) {
    //         delItem(cart[i]);
    //     }
    // }


    const totalQty = () => {
        const allQtys = cart.map(item => item.quantity);
        const total = allQtys.reduce((prev, current) => prev + current, 0);
        return total;
    }

    const totalPrice = () => {
        const itemPrice = cart.map(item => item.price * item.quantity);
        return itemPrice.reduce((prev, current) => prev + current, 0);
    }


    const cleanCart = () => {
        const a = [];
        setCart(a);
    }

    const contexValue = {
        cart,
        setCart,
        addItem,
        totalQty,
        totalPrice, 
        inCart,
        delItem,
        cleanCart,
        itemQuantity,
        upQty,
        downQty
    }

    return(
        <Provider value={contexValue}>
            {children}
        </Provider>
    )
}

export default MyProvider;