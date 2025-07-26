import AddIngredientButton from '../components/AddIngredientButton';
import PantryIngredientList from '../components/PantryIngredientList';
import '../styles/pantry.css';

const Pantry = () => {
    return (
        <div className="pantry-page">
            <h1> Welcome to your Pantry!</h1>
            <AddIngredientButton />
            <PantryIngredientList />
        </div>
    )
}

export default Pantry;