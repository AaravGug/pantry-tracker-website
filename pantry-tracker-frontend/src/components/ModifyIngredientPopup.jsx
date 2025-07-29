/* Todo: create this component that allows for modifying ingredient entries in pantry/db, this is used when clicking on an ingredient <li> item 
this component should allow users to specify quantities and units for entries to pantry table
should be reusable for adding new ingredient and for modifying quantity of existing ingredient
 */
import { useState } from 'react';
import ModifyIngredientEntry from '../utils/ModifyIngredientEntry';

const ModifyIngredientPopup = ({ ingredientName, givenUnits, purpose, onClose }) => {
    const [quantity, setQuantity] = useState(0);
    const [units, setUnits] = useState(givenUnits || 'whole');

    const handleConfirm = () => {
        ModifyIngredientEntry({ ingredientName, quantity, units });
        onClose();
    }

    return (
        <div className="popup-window">
            <div className="popup-content">
                <h2>{purpose} {ingredientName.toLowerCase()}</h2>
                <input type="number" value={quantity} min="0" max="32767" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)}/>
                <select value={units} onChange={(e) => setUnits(e.target.value)}>
                    <option value="whole">Whole</option>
                    <option value="milligrams">Milligrams</option>
                    <option value="grams">Grams</option>
                    <option value="ounces">Ounces</option>
                    <option value="pounds">Pounds</option>
                    <option value="milliliters">Milliliters</option>
                    <option value="liters">Liters</option>
                    <option value="teaspoons">Teaspoons</option>
                    <option value="tablespoons">Tablespoons</option>
                    <option value="cups">Cups</option>
                    <option value="pints">Pints</option>
                    <option value="quarts">Quarts</option>
                    <option value="gallons">Gallons</option>
                    <option value="slices">Slices</option>
                </select>
                <div className= 'popup-bottom-buttons'>
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModifyIngredientPopup;