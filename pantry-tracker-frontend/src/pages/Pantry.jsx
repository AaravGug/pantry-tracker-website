import PantryPageHeader from '../components/PantryPageHeader';
import PantryIngredientList from '../components/PantryIngredientList';
import '../styles/pantry-and-grocery.css';

const Pantry = () => {
    return (
        <div className="pantry-page">
            <h1> Welcome to your Pantry!</h1>
            <PantryPageHeader />
            <PantryIngredientList />
        </div>
    )
}

export default Pantry;