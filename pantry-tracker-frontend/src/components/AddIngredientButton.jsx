import { useState } from "react";
import AddIngredientPopup from './AddIngredientPopup';

const AddIngredientButton = ({ source }) => {
    const [showPopup, setShowPopup] = useState(false);

        return (
            <>
                <button className="add-ingredient-button" onClick={
                    () => setShowPopup(true)
                }>Add Ingredient</button>
                {showPopup && <AddIngredientPopup source={source} onClose={() => setShowPopup(false)} />}
            </>
        );
};

export default AddIngredientButton;