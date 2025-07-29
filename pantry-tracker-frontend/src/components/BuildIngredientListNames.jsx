import IngredientClickHandler from './IngredientClickHandler';

const BuildIngredientListNames = ({ ingredientList }) => {
    return (
        <ul>
          {ingredientList?.map((name, index) => (
            <li key={index} onClick={IngredientClickHandler}>{name}</li>
          ))}
        </ul>
    );
}

export default BuildIngredientListNames;