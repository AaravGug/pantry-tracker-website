import '../styles/home.css';
import pantryImage from '../assets/International-Cat-Day-Challenge.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Pantry Tracker!</h1>
      </header>
      <main className="content">
        <img src={pantryImage} alt="Pantry Illustration" className="hero-image" />
        <p className="tagline">
          Simplify your kitchen. Track, manage, and never run out of your essentials.
        </p>
        <Link to="/pantry" className="get-started-button">Get Started</Link>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Smart Pantry. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;