import { Link } from "react-router-dom";

function Item({item}) {
    return(
        <Link to={`/item/${item.id}`}>
            <div className="p-3 border bg-light">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
            </div>
        </Link>
    );
};
export default Item;