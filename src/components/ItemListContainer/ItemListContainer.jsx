import "./ItemListContainer.css";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
        <h2 className="ItemListContainer-h2">Greetings for everybody!</h2>
        <ItemList />
    </div>
  )
}

export default ItemListContainer;