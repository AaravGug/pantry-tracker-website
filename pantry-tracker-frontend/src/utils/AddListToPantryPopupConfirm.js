const AddListToPantryPopupConfirm = async() => {
    const response = await fetch('/add-list-to-pantry', { method: 'POST' })
    const data = await response.json()
    const wasSuccessful = data.success

    if (wasSuccessful){ 
        await fetch('/empty-grocery-list', { method: 'POST' })
    }
    else {
        console.log("could not add to pantry")
    }
}

export default AddListToPantryPopupConfirm;