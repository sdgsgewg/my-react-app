import { useState } from "react";

export default function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value == "") {
      alert("Task can't be empty!");
      return;
    }

    addTodo(value);
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
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
}
