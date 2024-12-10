import { useState } from "react";

export default function EditShoppingCartForm({ item, updateItem }) {
  const [value, setValue] = useState(item.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("Item can't be empty!");
    }

    updateItem(item.id, value);
    setValue("");
  };

  return (
    <>
      <form className="ShoppingCartForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="item-input"
          name="item-input"
          id="item-input"
          value={value}
          placeholder="Update your task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="item-btn">
          Update Item
        </button>
      </form>
    </>
  );
}
