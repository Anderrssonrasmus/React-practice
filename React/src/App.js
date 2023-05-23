import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/homepage';
import Navbar from './components/Navbar';
import Projects from './pages/projects';

function App() {
  return (
      <div className="app">
        <Navbar />
        <div className='wrapper'>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
