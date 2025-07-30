import AddIngredientButton from './AddIngredientButton';

const GroceryListPageHeader = () => {
    return (
    <div className="grocery-list-page-header">
        <h2>Your Grocery List:</h2>
        <div>
            <AddIngredientButton source={"grocery list"}/>
            <button className="add-to-pantry-button">Add List to Pantry</button>
        </div>
    </div>
    )
}

export default GroceryListPageHeader;