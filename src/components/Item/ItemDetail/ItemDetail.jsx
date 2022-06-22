function ItemDetail(props) {

    return(
        <>
        <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light col-3" key={props.item.id}>
                <img src={props.item.url} alt={props.item.name} />
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <p>${props.item.price}</p>
            </div>
        </>
    );
};
export default ItemDetail;