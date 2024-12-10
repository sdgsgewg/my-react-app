import { useState } from "react";

export default function ShoppingCartForm({ addItem }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("Item can't be empty");
      return;
    }

    addItem(value);
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
          placeholder="Add a new item"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="item-btn">
          Add Item
        </button>
      </form>
    </>
  );
}
