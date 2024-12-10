import { Link } from "react-router-dom";
import "./Header.css";

function Menu() {
  return (
    <div>
      <Link to="/todo">
        <i className="fas fa-list"></i> To-Do List
      </Link>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i> Shopping Cart
      </Link>
      <Link to="/expense">
        <i className="fas fa-wallet"></i> Expense Tracker
      </Link>
    </div>
  );
}

export default Menu;
