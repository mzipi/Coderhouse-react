import { Link } from "react-router-dom";

function Item({product}) {
    return(
        <Link to={`/item/${product.id}`}>
            <div className="p-3 border bg-light">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </div>
        </Link>
    );
};
export default Item;