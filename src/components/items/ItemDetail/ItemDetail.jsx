import ItemCount from "./ItemCount";

function ItemDetail({item, setItem}) {

    return(
        <>
            <h1>Detalles del producto</h1>
            <div className="p-3 border bg-light card" style={{width: '38rem'}} key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="row align-items-center">
                    <p className="col-3 text-center">Stock: {item.stock}</p>
                    <p className="col text-center fs-3">${item.price}</p>
                </div>
                <ItemCount 
                    initial={1} 
                    stock={item.stock}
                    item={item}
                    setItem={setItem}>
                </ItemCount>    
            </div>
        </>
    );
};
export default ItemDetail;