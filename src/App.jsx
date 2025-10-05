import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Blogs from './Blogs.jsx';
import './App.css';

function App() {
  return (
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
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Ultimate Pokémon Game Archive!</h2>
    <p>Your definitive guide to the main series Pokémon games. From the nostalgic routes of Kanto in 1998 to the vast open world of Paldea, we\'ve chronicled every step of the journey.</p>
    <p>Explore the full chronological list via the "Pokémon Games" link and relive the adventure. Become the Pokémon Master you were always meant to be!</p>
  </div>
);

export default App;

// Refreshed