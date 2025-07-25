import React, { useState } from "react";
import AddIngredientPopup from './AddIngredientPopup';

const AddIngredientButton = ({}) => {
const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <button className="button" onClick={
                () => setShowPopup(true)
            }>Add Ingredient</button>
            {showPopup && <AddIngredientPopup onClose={() => setShowPopup(false)} />}
        </>
    );
};

export default AddIngredientButton;