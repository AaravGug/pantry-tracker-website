/* Todo: Update pantry list when ingredient entry is modified, maybe make function that is passed ingredientList setter and updates it so that UI updates
 */
import { useState } from 'react';
import ModifyIngredientEntry from '../utils/ModifyIngredientEntry';
import ModifyGroceryListEntry from '../utils/ModifyGroceryListEntry';

const ModifyIngredientPopup = ({ ingredientName, givenUnits, purpose, source, onClose }) => {
    const [quantity, setQuantity] = useState(0);
    const [units, setUnits] = useState(givenUnits || 'whole');

    const handleConfirm = () => {
        if (source === "pantry") {
            ModifyIngredientEntry({ ingredientName, quantity, units });
            
        }
        else if (source === "grocery list") {
            ModifyGroceryListEntry({ ingredientName, quantity, units });
        }
        else {
            console.log('source cannot be determined, issue with string equality check');
        }
        onClose();
    }

    return (
        <div className="popup-window">
            <div className="popup-content">
                <h2>{purpose} {ingredientName.toLowerCase()}</h2>
                <div className="modify-ingredient-info">
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
                </div>
                
                <div className= 'popup-bottom-buttons'>
                    <button onClick={handleConfirm}>Confirm</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default ModifyIngredientPopup;