import { useState, useEffect } from 'react';
import BuildIngredientListInfo from './BuildIngredientListInfo';
import PantrySearchBar from './PantrySearchBar';

const PantryIngredientList = () => {
    let [ingredientList, setIngredientList] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const fetchPantry = async () => {
        const ingredientJson = await fetch('/get-ingredient-list');
        const data = await ingredientJson.json(); // data is a Json with 3 keys: 'name', 'quantity', and 'units'
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
    }, []);

    if (typeof ingredientList === 'string') {
        return (
            <p>{ingredientList}</p>
        )
    }
    else {
        return (
            <>
                <PantrySearchBar ingredientsList={ingredientList} setSearchResults={setFilteredResults} />
                <BuildIngredientListInfo ingredientList={filteredResults} />
            </>
    );
    }
    
}

export default PantryIngredientList;