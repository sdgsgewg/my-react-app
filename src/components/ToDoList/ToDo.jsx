import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function ToDo({ task, toggleComplete, deleteTodo }) {
  const navigate = useNavigate();

  const navigateToEditForm = (task) => {
    navigate("/todo/edit", {
      state: {
        title: "Edit Task Form",
        task: task,
      },
    });
  };

  return (
    <>
      <div
        className={`flex justify-between items-center bg-[#8758ff] text-white px-3 py-4 rounded-md mb-4 cursor-pointer ${
          task.completed ? "completed" : ""
        } hover:bg-[#6c4ccd] transition duration-300`}
      >
        <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
            onClick={() => navigateToEditForm(task)}
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
