import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDo({ task, toggleComplete, editTodo, deleteTodo }) {
  return (
    <>
      <div className={`Todo ${task.completed ? "completed" : ""}`}>
        <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => editTodo(task.id)}
          />
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
            onClick={() => deleteTodo(task.id)}
          />
        </div>
      </div>
    </>
  );
}
