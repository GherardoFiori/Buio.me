import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Tpot from './pages/tpot';
import About from './pages/about';
import Projects from './pages/projects';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/App.css';
import './css/aboutme.css';
import './css/footer.css';
import './css/navbar.css';
import './css/projects.css';

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
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
