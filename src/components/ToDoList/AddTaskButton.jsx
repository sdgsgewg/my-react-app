import { useNavigate } from "react-router-dom";

export default function AddTaskButton() {
  const navigate = useNavigate();

  const navigateToAddForm = () => {
    navigate("/todo/add", {
      state: {
        title: "Add Task Form",
      },
    });
  };

  return (
    <>
      <div
        className="bg-slate-500 flex justify-center items-center cursor-pointer py-3 border-gray-500 rounded-xl my-6 hover:bg-slate-600 transition duration-300"
        onClick={navigateToAddForm}
      >
        <p className="text-white">+ Add New Task</p>
      </div>
    </>
  );
}
