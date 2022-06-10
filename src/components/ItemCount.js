import { useState } from "react";

function ItemCount(props) {
    const stock = 5;
    return(
        <div>
            <div className="d-flex">
                <p>{stock}</p>
                <button 
                    type="button" 
                    className="btn btn-primary">+</button>
                <button type="button" className="btn btn-primary">-</button>
            </div>
            <button type="button" className="btn btn-primary">Agregar al carro</button>
        </div>
    );
};
export default ItemCount;