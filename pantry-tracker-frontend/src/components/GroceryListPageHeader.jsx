import AddIngredientButton from './AddIngredientButton';
import AddListToPantryButton from './AddListToPantryButton';

const GroceryListPageHeader = () => {
    return (
    <div className="grocery-list-page-header">
        <h2>Your Grocery List:</h2>
        <div>
            <AddIngredientButton source={"grocery list"}/>
            <AddListToPantryButton />
        </div>
    </div>
    )
}

export default GroceryListPageHeader;