import Item from "./Item";

function ItemList(props) {
    return(
        props.catalogo.map(item => 
            <Item 
                id={props.item.id}
                url={props.item.url}
                name={props.item.name}
                description={props.item.description}
            />
        )
    );
};
export default ItemList;