import { useState } from "react";

export default function EditToDoForm({ task, updateTodo }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value == "") {
      alert("Task can't be empty!");
      return;
    }

    updateTodo(value, task.id);
    setValue("");
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          name="todo-input"
          id="todo-input"
          value={value}
          placeholder="Update your task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </>
  );
}
