import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Pantry from './pages/Pantry';
import Recipes from './pages/Recipes';
import GroceryList from './pages/GroceryList';

const App = () => {
  return (
    <Router>
      <nav className="app-navbar">
        <Link to="/" className="page-link">Home</Link>
        <Link to="/pantry" className="page-link">Pantry</Link>
        <Link to="/grocery-list" className="page-link">Grocery List</Link>
        <Link to="/recipes" className="page-link">Recipes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;