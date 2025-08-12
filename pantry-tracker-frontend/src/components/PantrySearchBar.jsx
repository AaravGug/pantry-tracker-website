import { useState, useEffect } from 'react';

const PantrySearchBar = ({ ingredientsList, setSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        if (newQuery.length > 0) {
            const filteredList = ingredientsList.filter(ingredient => 
                ingredient.name.toLowerCase().includes(newQuery.toLowerCase())
            );
            setSearchResults(filteredList);
        }
        else {
            setSearchResults(ingredientsList);
        }
    }

    useEffect(() => {
        setSearchResults(ingredientsList);
    }, [ingredientsList]);

    return (
        <input className='pantry-search-bar'
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
        />
    )
}

export default PantrySearchBar;