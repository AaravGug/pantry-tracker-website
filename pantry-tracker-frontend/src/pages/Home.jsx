import '../styles/home.css';
import { Link } from 'react-router-dom';
import React, { useState }from 'react';
import SupabaseAuth from '../utils/SupabaseClient';
import LoggedInCheck from '../utils/LoggedInCheck';

const clickHandler = () => {
  // console.log('handling click!');
  // setShowCheck(true);
  // {showCheck && <LoggedInCheck />}
  // <LoggedInCheck />;
};

const Home = () => {
  const [showCheck, setShowCheck] = useState(false);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Pantry Tracker!</h1>
      </header>
      <main className="content">
        {/* Can add an image here in the future, will slot in with no issue */}
        <p className="tagline">
          Track and manage your ingredients, with delicious recipe suggestions!
        </p>
        <Link to="/pantry" className="get-started-button">Get Started</Link>
      </main>
      <footer className="footer">
        Made by Aarav Guglani <a href="https://github.com/AaravGug" target="_blank">GitHub</a>
      </footer>
    </div>
  );
};

export default Home;