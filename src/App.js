import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Tpot from './pages/tpot';
import Homelab from './pages/homelab';
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tpot" element={<Tpot />} />
          <Route path="/homelab" element={<Homelab />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
