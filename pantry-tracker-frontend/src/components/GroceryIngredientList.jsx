import { useState, useEffect } from 'react';
import BuildIngredientListInfo from './BuildIngredientListInfo';
import PantrySearchBar from './PantrySearchBar';
import { useGroceryList } from './GroceryListProvider';

const GroceryIngredientList = () => {
    const { refreshFlag } = useGroceryList();
    let [ingredientList, setIngredientList] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    const fetchGroceryList = async () => {
        const ingredientJson = await fetch('/get-grocery-list');
        const data = await ingredientJson.json(); // data is a Json with 3 keys: 'name', 'quantity', and 'unitID'
        const ingredients = data.ingredients;
        if (ingredients.length > 0) {
            setIngredientList(ingredients);
        }
        else {
            setIngredientList("Start building your grocery list with the button above!");
        }
    }

    useEffect(() => {
        fetchGroceryList();
    }, [refreshFlag]);

    if (typeof ingredientList === 'string') {
        return (
            <p>{ingredientList}</p>
        )
    }
    else {
        return (
            <>
                <PantrySearchBar ingredientsList={ingredientList} setSearchResults={setFilteredResults} />
                <BuildIngredientListInfo ingredientList={filteredResults} source={"grocery list"} />
            </>
    );
    }
    
}

export default GroceryIngredientList;