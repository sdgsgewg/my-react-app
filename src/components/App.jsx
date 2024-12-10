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
import ShoppingCart from "./ShoppingCart/ShoppingCartWrapper";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/todo" replace />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
