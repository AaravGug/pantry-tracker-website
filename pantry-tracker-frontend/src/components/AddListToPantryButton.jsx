import { useState } from 'react';
import AddListToPantryPopup from './AddListToPantryPopup'

const AddListToPantryButton = () => {
    const [showPopup, setShowPopup] = useState(false);

        return (
            <>
                <button className="add-to-pantry-button" onClick={
                    () => setShowPopup(true)
                }>Add List To Pantry</button>
                {showPopup && <AddListToPantryPopup onClose={() => setShowPopup(false)} />}
            </>
        );
}

export default AddListToPantryButton;