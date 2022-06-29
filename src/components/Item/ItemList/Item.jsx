import { Link } from "react-router-dom";

function Item({id, name, image, price}) {
    return(
        <div className="p-3 border bg-light">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <Link to={`/item/${id}`}>Ver más</Link>
        </div>
    );
};
export default Item;