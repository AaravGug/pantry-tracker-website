import IngredientClickHandler from './IngredientClickHandler';

const BuildIngredientListInfo = ({ ingredientList }) => {

    return (
        <ul>
            {ingredientList.map((ingredient, index) => (
                <li key={index} onClick={IngredientClickHandler}>{ingredient.name} - {ingredient.quantity} {ingredient.units}</li> 
            ))}
        </ul>
    );
}

export default BuildIngredientListInfo;