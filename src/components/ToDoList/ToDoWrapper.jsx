import SearchBox from "./SearchBox";
import SortTaskButton from "./SortTasksButton";
import AddTaskButton from "./AddTaskButton";
import ToDo from "./ToDo";
import "./ToDoList.css";
import { useToDoContext } from "./ToDoProvider";

export default function ToDoWrapper() {
  const { todos, setTodos } = useToDoContext();

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className="ToDoList">
        <div className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] h-[80vh] bg-[#1a1a40] p-8 rounded-md shadow-md">
          <h1 className="text-white mb-2 text-3xl">My To-Do List</h1>
          <div className="flex justify-between items-center gap-4">
            <SearchBox />
            <SortTaskButton />
          </div>

          <AddTaskButton />

          <div className="to-do-lists max-h-[42vh] overflow-y-scroll flex flex-col gap-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <ToDo
                  task={todo}
                  key={todo.id}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))
            ) : (
              <p className="text-white text-lg text-center mt-4">
                No Task Found
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
