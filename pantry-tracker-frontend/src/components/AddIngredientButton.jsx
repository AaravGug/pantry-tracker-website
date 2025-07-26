import React, { useState } from "react";
import AddIngredientPopup from './AddIngredientPopup';

const AddIngredientButton = ({}) => {
const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="add-ingredient-button-container">
            <h2>Your Pantry Ingredients:</h2>
            <button className="add-ingredient-button" onClick={
                () => setShowPopup(true)
            }>Add Ingredient</button>
            {showPopup && <AddIngredientPopup onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default AddIngredientButton;