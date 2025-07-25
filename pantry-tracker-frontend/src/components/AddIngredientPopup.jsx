import React, { useState } from 'react';

const AddIngredientPopup = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState();

  const handleSearch = async(event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    const searchedIngredients = await fetch(`/lookup-ingredient?query=${encodeURIComponent(newQuery)}`)
    const data = await searchedIngredients.json();
    setSearchResults(data.ingredients);
  };

  return (
    <div className="popup-window">
      <div className="popup-content">
        <div className='popup-header'>
          <h2>Add Ingredients</h2>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
        />
        </div>
        {/* Display search results */}
        <ul>
          {searchResults?.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <div className ='add-ingredient-buttons'>
          <button onClick={onClose}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddIngredientPopup;