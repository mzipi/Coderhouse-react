import Item from "./Item";

function ItemList({ items }) {

    return(
        items.map(item => 
            <div className="col-3" key={item.id}>
                <Item item={item} />
            </div>
        )
    );
};
export default ItemList;