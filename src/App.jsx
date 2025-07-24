import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SimpleHome from './pages/SimpleHome';
import About from './pages/About';
import Projects from './pages/Projects';
import Tools from './pages/Tools';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="dark">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SimpleHome />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tools" element={<Tools />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

