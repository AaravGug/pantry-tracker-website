const ModifyIngredientEntry = async ({ ingredientName, quantity, units }) => {
    console.log('sending information to backend:', { ingredientName, quantity, units})
    const responseJSON = await fetch('/modify-ingredient-entry', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ingredientName, quantity, units })});
    const response = await responseJSON.json()
    const message = response.message
    if (message === "Ingredient entry modified successfully") {
        //Figure out react contexts to pass state down so I can rerender the pantry list component after modifying an ingredient entry
    }
}

export default ModifyIngredientEntry;