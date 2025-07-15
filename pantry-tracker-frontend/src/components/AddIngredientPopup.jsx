import React from 'react';

const AddIngredientPopup = ({ onClose }) => {
  return (
    <div className="popup-window">
      <div className="popup-content">
        <h2>Add Ingredients</h2>
        <p>Some GUI here</p>
        <button onClick={onClose}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddIngredientPopup;