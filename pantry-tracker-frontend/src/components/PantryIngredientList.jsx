import { useState, useEffect } from 'react';

const PantryIngredientList = () => {
    let [ingredientList, setIngredientList] = useState([]);

    const fetchPantry = async () => {
        const ingredientJson = await fetch('/get-ingredient-list');
        const data = await ingredientJson.json(); // data is a Json with 3 keys: 'name', 'quantity', and 'units'
        ingredientList = data.ingredients;
        if (ingredientList.length > 0) {
            setIngredientList(ingredientList);
        }
        else {
            setIngredientList("Looks like you don't have any ingredients in your pantry yet, you can add some using the button above!");
        }
        console.log("Fetched ingredients:", ingredientList);
    }

    useEffect(() => {
        fetchPantry();
    }, []);

    if (typeof ingredientList === 'string') {
        console.log("No ingredients found, displaying message.");
        return (
            <p>{ingredientList}</p>

        )
    }
    else {
        console.log("Ingredients found, displaying list.");
        return (
            <ul>
                {ingredientList.map((ingredient, index) => (
                    <li key={index}>{ingredient.name} - {ingredient.quantity} {ingredient.units}</li> 
                ))}
            </ul>
    );
    }
    
}

export default PantryIngredientList;