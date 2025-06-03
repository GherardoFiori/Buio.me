import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div classname="nav-logo">
         <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Buio Logo" className="nav-logo" />
      </Link>
      </div>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/projects">PROJECTS</Link>
      </div>
    </nav>
  );
};

export default Navbar;