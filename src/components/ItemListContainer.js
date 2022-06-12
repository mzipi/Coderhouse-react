import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer(props) {
    return(
        <>
            <p className="fs-2">{props.greeting}</p>
            <ItemCount stock={5} initial={0} onAdd/>
            <ItemList />
        </>
    );
};

export default ItemListContainer;