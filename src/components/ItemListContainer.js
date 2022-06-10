import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return(
        <>
            <p className="fs-2">{props.greeting}</p>
            <ItemCount stock={5} initial={0} onAdd/>
        </>
    );
};

export default ItemListContainer;