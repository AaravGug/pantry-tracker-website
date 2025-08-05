const ModifyGroceryListEntry = async ({ ingredientName, quantity, units }) => {
    console.log('sending information to backend:', { ingredientName, quantity, units});
    const response = await fetch('/modify-grocery-list-entry', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ingredientName, quantity, units })});
    return await response.json();
}

export default ModifyGroceryListEntry;