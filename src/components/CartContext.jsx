import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

const MyProvider = ({ children }) => {

    const [ cart, setCart ] = useState([]);
    // const [ cantidadTotal, setCantidadTotal ] = useState(0);
    // const [ precioTotal, setPrecioTotal ] = useState(0);
    // const [ cantidad, setCantidad ] = useState();

    const addItem = (item, counter) => {

        // const copia = [...cart];
        
        // const newProduct = {
        //     ...product,
        //     cantidad: cantidad
        // }
            
        // copia.push(newProduct);
            
        // setCart(copia);
        // setCantidadTotal(cantidadTotal + cantidad);
        // serPrecioTotal(precioTotal + product.precio * cantidad);
            
            
        // setCantidadTotal(cantidadTotal + cantidad);
        // setPrecioTotal(precioTotal + item.price * cantidad);
            
        // if(!isInCart(item.id)) {
        //     const aux = cart.slice();
        //     aux.push(item);
        //     setCart(aux);
        // } else {
        //     addQuantity(item.id)
        // }

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
    
    // const delItem = (id) => {
    //     setCart(cart.filter(currentuct => (currentuct.id !== Number(id))));
    // }



    const contexValue = {
        cart,
        addItem,
        totalQuantity,
        totalPrice
    }

    return(
        <Provider value={contexValue}>
            {children}
        </Provider>
    )
}

export default MyProvider;