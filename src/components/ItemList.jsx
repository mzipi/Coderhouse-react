import Item from "./Item";

function ItemList({ items }) {
    return(
        items.map(item => 
            <div className="col-3">
                <Item 
                key={item.id}
                name={item.name}
                url={item.url}
                description={item.description}
                price={item.price}
            />
            </div>
        )
    );
};
export default ItemList;