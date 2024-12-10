import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

export const useToDoContext = () => useContext(ToDoContext);

export function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "mandi", completed: false },
    { id: uuidv4(), task: "makan", completed: false },
    { id: uuidv4(), task: "belajar", completed: false },
    { id: uuidv4(), task: "tidur", completed: false },
  ]);

  return (
    <ToDoContext.Provider value={{ todos, setTodos }}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext };
