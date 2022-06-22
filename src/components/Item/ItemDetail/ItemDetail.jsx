function ItemDetail({ item }) {

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light col-3" key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        </>
    );
};
export default ItemDetail;