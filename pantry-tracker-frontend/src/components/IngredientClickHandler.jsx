import { useState } from 'react';
import ModifyIngredientPopup from './ModifyIngredientPopup';

const IngredientClickHandler = () => {
    const [showPopup, setShowPopup] = useState(true);
    // Fix this, hook error or something like that
    return (
        showPopup && <ModifyIngredientPopup onClose={() => setShowPopup(false)} />
    );

}

export default IngredientClickHandler;