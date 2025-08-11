import '../styles/home.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
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
        &copy; {new Date().getFullYear()} Smart Pantry. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;