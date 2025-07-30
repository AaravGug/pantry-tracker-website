const ModifyIngredientEntry = async ({ ingredientName, quantity, units }) => {
    console.log('sending information to backend:', { ingredientName, quantity, units})
    await fetch('/modify-ingredient-entry', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ingredientName, quantity, units })});
}

export default ModifyIngredientEntry;