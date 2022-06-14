import ItemCount from "./ItemCount";

function Item(props) {
    return(
        <div key={props.id}>
            <img src={props.url} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <ItemCount stock={5} initial={0} onAdd />
        </div>
    );
};
export default Item;