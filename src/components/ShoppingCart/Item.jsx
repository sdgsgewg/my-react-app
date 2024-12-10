import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Item({ item, toggleComplete, editItem, deleteItem }) {
  return (
    <>
      <div className={`Item ${item.taken ? "completed" : ""}`}>
        <div className="checkItem">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="check"
            onClick={() => toggleComplete(item.id)}
          />
        </div>
        <p>{item.name}</p>
        <div className="manageItem">
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => editItem(item.id)}
          />
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
            onClick={() => deleteItem(item.id)}
          />
        </div>
      </div>
    </>
  );
}
