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
        className={`flex items-center bg-[#8758ff] text-white px-3 py-4 rounded-md cursor-pointer ${
          task.completed ? "completed" : ""
        } hover:bg-[#6c4ccd] transition duration-300`}
      >
        <div>
          <input
            className="w-4 h-4 cursor-pointer"
            type="checkbox"
            onClick={() => toggleComplete(task.id)}
          />
        </div>
        <div className="flex flex-col gap-1 ms-4">
          <p>{task.task}</p>
          <small>{task.startTime + " - " + task.endTime}</small>
        </div>
        <div className="ms-auto">
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
