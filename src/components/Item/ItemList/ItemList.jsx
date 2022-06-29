import Item from "./Item";

function ItemList({ items }) {

    return(
        items.map(item => 
            <div className="col-3" key={item.id}>
                <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                />
            </div>
        )
    );
};
export default ItemList;