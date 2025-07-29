import { useState } from 'react';
import ModifyIngredientPopup from './ModifyIngredientPopup';

const BuildIngredientListInfo = ({ ingredientList }) => {
    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ul>
                {ingredientList.map((ingredient, index) => (
                    <li key={index} onClick={() => {
                        setSelectedIngredient(ingredient);
                        setShowPopup(true);
                    }
                    }>{ingredient.name} - {ingredient.quantity} {ingredient.unitID}</li> 
                ))}
            </ul>
            {showPopup && <ModifyIngredientPopup ingredientName={selectedIngredient.name} givenUnits={selectedIngredient.unitID} purpose={'Modify'} onClose={() => setShowPopup(false)} />}
        </>
    );
}

export default BuildIngredientListInfo;