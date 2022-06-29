import { createContext, useState } from "react";

export const context = createContext();

const Provider = context.Provider;

const MyProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);
    const [ totalCount, setTotalCount ] = useState(0);
    const [ itemCount, setItemCount ] = useState(0);
    const [ price, setPrice ] = useState(0);

    const update  = (quantity, item) => {
        if(cart.length > 0){
            cart.map((x)=>{
                if(x.id === item.id) {
                    if(quantity > totalCount) {
                        setTotalCount(quantity);
                    }
                } else {
                    cart.push(item);
                    console.log('algo')
                    setItemCount(quantity);
                }
            })
        } else {
            setCart(item);
        }
        setTotalCount(quantity);
    }

    const contexValue = {
        cart,
        totalCount,
        itemCount,
        price,
        update
    }

    return(
        <Provider value={contexValue}>
            {children}
        </Provider>
    )
}

export default MyProvider;