import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToDoContext } from "./ToDoProvider";

export default function EditToDoForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const task = location.state?.task;
  const title = location.state?.title;

  const [name, setName] = useState(task.task);
  const [startTime, setStartTime] = useState(task.startTime);
  const [endTime, setEndTime] = useState(task.endTime);
  const { todos, setTodos } = useToDoContext();

  const navigateToHome = () => {
    navigate("/todo");
  };

  const updateTask = (id, name, startTime, endTime) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: name, startTime: startTime, endTime: endTime }
          : todo
      )
    );
  };

  const validateTime = (startTime, endTime) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    if (
      endHour < startHour ||
      (endHour === startHour && endMinute <= startMinute)
    ) {
      alert("End Time can't be earlier than or same with Start Time!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name can't be empty!");
      return;
    }
    if (startTime === "") {
      alert("Start Time can't be empty");
      return;
    }
    if (endTime === "") {
      alert("Start Time can't be empty");
      return;
    }

    if (!validateTime(startTime, endTime)) {
      console.log("Time validation failed.");
      return;
    } else {
      console.log("Time validation passed.");
    }

    updateTask(task.id, name, startTime, endTime);
    setName("");
    setStartTime("");
    setEndTime("");

    navigate("/todo", { state: { message: "Task updated successfully!" } });
  };

  return (
    <>
      <main className="ToDoList">
        <div className="w-[500px] bg-[#1a1a40] text-white p-8 rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8758ff] text-black"
                name="name"
                id="name"
                value={name}
                placeholder="Enter task name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Start Time Field */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium" htmlFor="start-time">
                Start Time
              </label>
              <input
                type="time"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8758ff] text-black"
                name="start-time"
                id="start-time"
                value={startTime}
                placeholder="Enter task start time"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            {/* End Time Field */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-medium" htmlFor="end-time">
                End Time
              </label>
              <input
                type="time"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8758ff] text-black"
                name="end-time"
                id="end-time"
                value={endTime}
                placeholder="Enter task end time"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>

            {/* Control Button */}
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
