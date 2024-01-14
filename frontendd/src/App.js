import logo from './logo.svg';
import './App.css';
import { Link,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Critic from './pages/Critic';
import Organizator from './pages/Organizator';
import Autor from './pages/Autor';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Organizator">Organizator</Link>
          </li>
          <li>
            <Link to="/Critic">Critic</Link>
          </li>
          <li>
            <Link to="/Autor">Autor</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Organizator" element={<Organizator/>}/>
        <Route path="/Critic" element={<Critic/>}/>
        <Route path="/Autor" element={<Autor/>}/>
      </Routes>
    </div>
  );
}

export default App;
