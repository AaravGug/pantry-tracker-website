import API_BASE from '../utils/Api';

const modifyGroceryListEntry = async ({ ingredientName, quantity, units }) => {
    console.log('sending information to backend:', { ingredientName, quantity, units});
    const response = await fetch(`${API_BASE}/modify-grocery-list-entry`, {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ingredientName, quantity, units })});
    return await response.json();
}

export default modifyGroceryListEntry;