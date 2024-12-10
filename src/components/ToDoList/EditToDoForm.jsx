import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToDoContext } from "./ToDoProvider";

export default function EditToDoForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const title = location.state?.title;
  const task = location.state?.task;

  const [value, setValue] = useState(task);

  const { todos, setTodos } = useToDoContext();

  const navigateToHome = () => {
    navigate("/todo");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("Task can't be empty!");
      return;
    }

    updateTask(value, task.id);
    setValue("");

    navigate("/todo", { state: { message: "Task updated successfully!" } });
  };

  const updateTask = (task, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: task } : todo))
    );
  };

  return (
    <>
      <main className="ToDoList">
        <div className="w-[500px] bg-[#1a1a40] text-white p-8 rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8758ff] text-black"
                name="name"
                id="name"
                value={value.task}
                placeholder="Enter task name"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={navigateToHome}
                className="w-full bg-[#FF6B6B] text-white py-2 mt-4 rounded-md hover:bg-[#D64545] transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full bg-[#8758ff] text-white py-2 mt-4 rounded-md hover:bg-[#6c4ccd] transition duration-300"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
