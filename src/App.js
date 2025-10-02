import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blogs from './Blogs';
import './App.css'; // Import the App.css file

// The main App component sets up the routing for the website.
function App() {
  return (
    <Router>
      <div>
        {/* Navigation links to switch between pages. */}
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

        {/* The Routes component defines the different pages of the application. */}
        <Routes>
          {/* The home page route. */}
          <Route path="/" element={<Home />} />
          {/* The blogs page route. */}
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

// A simple Home component for the home page.
const Home = () => (
  <div>
    <h2>Welcome to the Pokémon Game Archive</h2>
    <p>This website provides a chronological list of all the main series Pokémon games, from the original Red and Blue to the upcoming Legends: Z-A.</p>
    <p>Click on the "Pokémon Games" link in the navigation to see the full list.</p>
  </div>
);

export default App;