import ItemCount from "./ItemCount";

function ItemDetail({ id, name, price, description, image }) {

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light col-3" key={id}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>${price}</p>
                <ItemCount initial={1} stock={5}/>
            </div>
        </>
    );
};
export default ItemDetail;