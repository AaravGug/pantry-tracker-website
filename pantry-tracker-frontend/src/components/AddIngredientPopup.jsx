import React, { useState } from 'react';
import BuildIngredientListNames from './BuildIngredientListNames';
import AddIngredientSearchBar from './AddIngredientSearchBar';

const AddIngredientPopup = ({ onClose }) => {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="popup-window">
      <div className="popup-content">
        <div className='popup-header'>
          <h2>Add Ingredients</h2>
          <AddIngredientSearchBar setSearchResults={setSearchResults} />
        </div>
        {/* Display search results */}
        <BuildIngredientListNames ingredientList={searchResults} />
        <div className ='add-ingredient-buttons'>
          <button onClick={onClose}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredientPopup;