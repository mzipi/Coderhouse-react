import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

const MyProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);

    const addItem = (item, counter) => {
        if(isInCart(item.name) === false) {
            const auxCart = [...cart];
            const newProduct = {
                ...item,
                cantidad: counter
            }
            auxCart.push(newProduct);
            return setCart(auxCart);
        } else {
            addQuantity(item.name, counter)
        }
    }
    
    const isInCart = (name) => {
        return cart.some((current) => current.name === name);
    }

    const addQuantity = (name, counter) => {
        const i = cart.findIndex((item) => item.name === name);
        if(cart[i].cantidad < cart[i].stock) {
            const aux = cart.slice();
            aux[i].cantidad = counter;
            setCart(aux);
        }
    }

    const totalQuantity = () => {
        const x = cart.map(item => item.cantidad);
        return x.reduce((a, b) => a + b, 0);
    }

    const totalPrice = () => {
        const x = cart.map(item => {
            return item.price * item.cantidad;
        });
        return x.reduce((a, b) => a + b, 0);
    }

    const delItem = (name) => {
        setCart(cart.filter(product => (product.name !== name)));
    }

    const cleanCart = () => {
        const a = [];
        setCart(a);
    }

    // const totalPrice = (cart) => {
    //     return cart.price.reduce((prev, current) => prev += (current.precio * current.cantidad), 0)
    // }

    // const totalQuantity = () => {
    //     return cart.reduce((prev, current) => prev += current.cantidad, 0)
    // }

    // const delQuantity = (id) => {
    //     const index = cart.findIndex((item) => item.id === Number(id));
    //     const item = cart[index];
    //     if(item.cantidad === 1) {
    //         delItem(id)
    //     } else {
    //         const newQuantity = item.cantidad - 1;
    //         const aux = cart.slice();
    //         aux[index].cantidad = newQuantity;
    //         setCart(aux);
    //     }
    // }
    

    const contexValue = {
        cart,
        addItem,
        totalQuantity,
        totalPrice, 
        isInCart,
        delItem,
        cleanCart
    }

    return(
        <Provider value={contexValue}>
            {children}
        </Provider>
    )
}

export default MyProvider;