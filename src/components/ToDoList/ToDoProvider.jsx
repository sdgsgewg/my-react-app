import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

export const useToDoContext = () => useContext(ToDoContext);

const todoLists = [
  {
    id: uuidv4(),
    task: "Shower",
    startTime: "08:00",
    endTime: "08:30",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Eat",
    startTime: "08:30",
    endTime: "09:00",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Study",
    startTime: "09:00",
    endTime: "11:00",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Sleep",
    startTime: "23:00",
    endTime: "08:00",
    completed: false,
  },
];

export function ToDoProvider({ children }) {
  const [todos, setTodos] = useState(todoLists);
  const [originalTodos, setOriginalTodos] = useState(todoLists);

  return (
    <ToDoContext.Provider value={{ todos, setTodos, originalTodos }}>
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext };
