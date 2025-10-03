import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blogs from './Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Pokémon Games</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Pokémon Game Archive</h2>
    <p>This website provides a chronological list of all the main series Pokémon games, from the original Red and Blue to the upcoming Legends: Z-A.</p>
    <p>Click on the "Pokémon Games" link in the navigation to see the full list.</p>
  </div>
);

export default App;