import "./Header.css";
import Menu from "./Menu";

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
        <Menu />
      </nav>
      <nav className="dropdown-menu">
        <Menu />
      </nav>
    </header>
  );
}

export default Header;
