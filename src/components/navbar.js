import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Buio Logo" className="nav-logo-img" />
        </Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT ME</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
      </div>
    </nav>
  );
};

export default Navbar;
