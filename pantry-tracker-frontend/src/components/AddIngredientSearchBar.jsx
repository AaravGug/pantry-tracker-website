import { useState } from 'react';

const AddIngredientSearchBar = ({ setSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async(event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        const searchedIngredients = await fetch(`/lookup-ingredient?query=${encodeURIComponent(newQuery)}`)
        const data = await searchedIngredients.json();
        setSearchResults(data.ingredients);
    };

    return (
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
        />
    )
}

export default AddIngredientSearchBar;