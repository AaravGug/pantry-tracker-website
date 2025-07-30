import '../styles/pantry-and-grocery.css';
import GroceryListPageHeader from '../components/GroceryListPageHeader';
import GroceryIngredientList from '../components/GroceryIngredientList'

const GroceryList = () => {
    return (
        <div className="grocery-list-page">
            <h1> Build your grocery list!</h1>
            <GroceryListPageHeader />
            <GroceryIngredientList />
        </div>
    )
}

export default GroceryList;