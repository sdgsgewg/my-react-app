import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ShoppingCart.css";
import ShoppingCartForm from "./ShoppingCartForm";
import EditShoppingCartForm from "./EditShoppingCartForm";
import Item from "./Item";

const itemLists = [
  {
    id: uuidv4(),
    name: "Air Mineral",
    taken: false,
    isEditing: false,
  },
  {
    id: uuidv4(),
    name: "Snack",
    taken: false,
    isEditing: false,
  },
  {
    id: uuidv4(),
    name: "Buku",
    taken: false,
    isEditing: false,
  },
  {
    id: uuidv4(),
    name: "Sabun",
    taken: false,
    isEditing: false,
  },
];

export default function ShoppingCart() {
  const [items, setItems] = useState(itemLists);

  const addItem = (itemName) => {
    setItems([
      ...items,
      {
        id: uuidv4(),
        name: itemName,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, taken: !item.taken } : item
      )
    );
  };

  const editItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const updateItem = (id, itemName) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, name: itemName, isEditing: !item.isEditing }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="shoppingCart">
      <div className="shoppingCartBox">
        <h1>My Shopping Cart</h1>
        <ShoppingCartForm addItem={addItem} />
        {items.length > 0 ? (
          items.map((item) =>
            item.isEditing ? (
              <EditShoppingCartForm
                item={item}
                key={item.id}
                updateItem={updateItem}
              />
            ) : (
              <Item
                item={item}
                key={item.id}
                toggleComplete={toggleComplete}
                editItem={editItem}
                deleteItem={deleteItem}
              />
            )
          )
        ) : (
          <p className="noItems">No items in cart</p>
        )}
      </div>
    </main>
  );
}
