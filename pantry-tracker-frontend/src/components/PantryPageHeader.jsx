import AddIngredientButton from './AddIngredientButton';

const PantryPageHeader = () => {
    return (
    <div className="pantry-page-header">
        <h2>Your Pantry Ingredients:</h2>
        <AddIngredientButton source={"pantry"}/>
    </div>
    )
}

export default PantryPageHeader;