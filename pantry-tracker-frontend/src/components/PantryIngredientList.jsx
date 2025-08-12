import { useState, useEffect, useCallback } from 'react';
import BuildIngredientListInfo from './BuildIngredientListInfo';
import PantrySearchBar from './PantrySearchBar';
import { usePantryList } from './PantryListProvider';
import API_BASE from '../utils/Api';

const PantryIngredientList = () => {
    const { refreshFlag } = usePantryList();
    let [ingredientList, setIngredientList] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const handleSearchResults = useCallback((results) => {
        setFilteredResults(results);
    }, []);

    const fetchPantry = async () => {
        const ingredientJson = await fetch(`${API_BASE}/get-ingredient-list`);
        const data = await ingredientJson.json(); // data is a Json with 3 keys: 'name', 'quantity', and 'unitID'
        const ingredients = data.ingredients;
        if (ingredients.length > 0) {
            setIngredientList(ingredients);
        }
        else {
            setIngredientList("Looks like you don't have any ingredients in your pantry yet, you can add some using the button above!");
        }
    }

    useEffect(() => {
        fetchPantry();
    }, [refreshFlag]);

    if (typeof ingredientList === 'string') {
        return (
            <p>{ingredientList}</p>
        )
    }
    else {
        return (
            <>
                <PantrySearchBar ingredientsList={ingredientList} setSearchResults={handleSearchResults} />
                <BuildIngredientListInfo ingredientList={filteredResults} source={"pantry"} />
            </>
    );
    }
    
}

export default PantryIngredientList;