import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="nav-logo">Chalana</div>

      {/* Desktop Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="nav-actions">
        {/* Theme Button */}
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        {/* Hamburger */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
