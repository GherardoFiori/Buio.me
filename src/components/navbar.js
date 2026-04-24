import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" onClick={close}>
        <img src="/logo.png" alt="Buio" className="nav-logo-img" />
      </Link>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/about" onClick={close}>About</Link>
        <Link to="/projects" onClick={close}>Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
