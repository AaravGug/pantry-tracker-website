import API_BASE from './Api';

const AddListToPantryPopupConfirm = async() => {
    const response = await fetch(`${API_BASE}/add-list-to-pantry`, { method: 'POST' })
    const data = await response.json()
    const wasSuccessful = data.success

    if (wasSuccessful){ 
        const secondResponse = await fetch(`${API_BASE}/empty-grocery-list`, { method: 'POST' })
        return await secondResponse.json();
    }
    else {
        console.log("could not add to pantry")
    }
}

export default AddListToPantryPopupConfirm;