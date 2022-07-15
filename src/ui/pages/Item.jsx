import { Link } from "react-router-dom";

function Item({item}) {

    return(
        <div className="p-3 border bg-light col-xxl-auto">
            <img src={item.image} alt={item.name} className="card-img-top" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`} className="btn btn-primary">Ver más</Link>
        </div>
    );
};
export default Item;