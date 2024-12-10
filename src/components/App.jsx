import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ToDoList from "./ToDoList/ToDoWrapper";
import AddToDo from "./ToDoList/AddToDoForm";
import EditToDo from "./ToDoList/EditToDoForm";
import ShoppingCart from "./ShoppingCart/ShoppingCartWrapper";
import ExpenseTracker from "./ExpenseTracker/ExpenseTrackerWrapper";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/todo" replace />} />

          {/* To-Do List */}
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/todo/add" element={<AddToDo />} />
          <Route path="/todo/edit" element={<EditToDo />} />

          {/* Shopping Cart */}
          <Route path="/cart" element={<ShoppingCart />} />

          {/* ExpenseTracker */}
          <Route path="/expense" element={<ExpenseTracker />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
