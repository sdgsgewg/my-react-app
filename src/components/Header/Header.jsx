import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My App</h1>
      <input
        type="checkbox"
        className="hamburger"
        name="hamburger"
        id="hamburger"
      />
      <label htmlFor="hamburger" className="hamburger-menu">
        <i className="fas fa-bars"></i>
      </label>
      <nav className="menu">
        <Link to="/todo">
          <i className="fas fa-list"></i> To-Do List
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i> Shopping Cart
        </Link>
      </nav>
      <nav className="dropdown-menu">
        <Link to="/todo">
          <i className="fas fa-list"></i> To-Do List
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i> Shopping Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;
