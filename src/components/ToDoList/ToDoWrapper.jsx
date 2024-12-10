import { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import "./ToDoList.css";

const todoLists = [
  {
    id: uuidv4(),
    task: "mandi",
    completed: false,
    isEditing: false,
  },
  {
    id: uuidv4(),
    task: "makan",
    completed: false,
    isEditing: false,
  },
  {
    id: uuidv4(),
    task: "belajar",
    completed: false,
    isEditing: false,
  },
  {
    id: uuidv4(),
    task: "tidur",
    completed: false,
    isEditing: false,
  },
];

export default function ToDoWrapper() {
  const [todos, setTodos] = useState(todoLists);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className="ToDoList">
        <div className="TodoWrapper">
          <h1>My To-Do List</h1>
          <ToDoForm addTodo={addTodo} />
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditToDoForm task={todo} key={todo.id} updateTodo={updateTask} />
            ) : (
              <ToDo
                task={todo}
                key={todo.id}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            )
          )}
        </div>
      </main>
    </>
  );
}
