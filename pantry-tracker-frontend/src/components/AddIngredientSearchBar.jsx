import { useState } from 'react';
import lookupIngredient from '../supabase_db_operations/lookupIngredient';
// import API_BASE from '../utils/Api';

const AddIngredientSearchBar = ({ setSearchResults }) => {
    const [query, setQuery] = useState('');

    // code for flask backend db operation
    // const handleSearch = async(event) => {
    //     const newQuery = event.target.value;
    //     setQuery(newQuery);

    //     const searchedIngredients = await fetch(`${API_BASE}/lookup-ingredient?query=${encodeURIComponent(newQuery)}`)
    //     const data = await searchedIngredients.json();
    //     setSearchResults(data.ingredients);
    // };

    const handleSearch = async(event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        const searchedIngredients = await lookupIngredient(newQuery);
        setSearchResults(searchedIngredients);
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