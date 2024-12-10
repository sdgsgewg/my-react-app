import { useToDoContext } from "./ToDoProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

export default function SortTaskButton() {
  const { todos, setTodos } = useToDoContext();

  const sortByCompleted = () => {
    setTodos([...todos].sort((a, b) => b.completed - a.completed));
  };

  const sortByAlphabetical = () => {
    setTodos([...todos].sort((a, b) => a.task.localeCompare(b.task)));
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        name="sort"
        id="sort-checkbox"
        className="hidden"
      />
      <label
        htmlFor="sort-checkbox"
        className="sort-icon bg-[#8758ff] text-white px-4 py-3 rounded-md hover:bg-[#6c4ccd] transition duration-300 cursor-pointer"
      >
        <FontAwesomeIcon icon={faSort} />
      </label>
      <div
        className="sort-options absolute right-0 bg-white shadow-lg rounded-md mt-1 w-48">
        <button
          onClick={sortByCompleted}
          className="w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Sort by Completed
        </button>
        <button
          onClick={sortByAlphabetical}
          className="w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Sort by Alphabetical
        </button>
      </div>
    </div>
  );
}
