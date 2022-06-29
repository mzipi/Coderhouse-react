import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
    const [ counter, setCounter ] = useState(initial);

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        };
    };

    const restar = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        };
    };

    const finish = () => {
        onAdd(counter);
    }

    return(
        <div>
            <div className="d-flex m-3">
                <button type="button" className="btn btn-primary" onClick={restar}>-</button>
                <p className="px-5">{counter}</p>
                <button type="button" className="btn btn-primary" onClick={sumar}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-primary d-block m-3" onClick={finish}>Agregar al carro</button>
            </div>
        </div>
    );
};
export default ItemCount;