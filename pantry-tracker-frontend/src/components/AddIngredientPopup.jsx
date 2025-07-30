import React, { useState } from 'react';
import BuildIngredientListNames from './BuildIngredientListNames';
import AddIngredientSearchBar from './AddIngredientSearchBar';

const AddIngredientPopup = ({ source, onClose }) => {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="popup-window">
      <div className="popup-content">
        <div className='popup-header'>
          <h2>Add Ingredients</h2>
          <AddIngredientSearchBar setSearchResults={setSearchResults} />
        </div>
        {/* Display search results */}
        <BuildIngredientListNames ingredientList={searchResults} source={source} />
        <button className='popup-bottom-buttons' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddIngredientPopup;