import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

function Item({id, name, image, price}) {
    return(
        <Link to={`/item/${id}`}>
            <div className="p-3 border bg-light">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <ItemCount />
            </div>
        </Link>
    );
};
export default Item;