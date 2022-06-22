import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

function Item({id, name, url, description, price}) {
    return(
        <Link to={`/item/${name}`} key={id}>
            <div className="p-3 border bg-light">
            <img src={url} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount />
            </div>
        </Link>
    );
};
export default Item;