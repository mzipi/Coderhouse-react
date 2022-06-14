import ItemCount from "./ItemCount";

function Item({id, name, url, description, price}) {
    return(
        <div className="p-3 border bg-light" key={id}>
            <img src={url} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount stock={5} initial={0} onAdd />
        </div>
    );
};
export default Item;