import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./Navbar.css";
import { useCart } from "./CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="HerbAura Soap" />

          <span className="brand-name">HerbAura</span>
        </Link>

        {/* Mobile Menu */}
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <ul className={`nav-links${menuOpen ? " is-open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/story" onClick={closeMenu}>
              Our Story
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/cart" className="cart-link" onClick={closeMenu}>
              <span className="cart-icon">🛒</span>
              <span>Cart</span>
              <span className="cart-count">{cartCount}</span>
            </Link>
          </li>

          <li className="nav-action">
            <Link to="/products" onClick={closeMenu}>
              Shop Now <span>↗</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
