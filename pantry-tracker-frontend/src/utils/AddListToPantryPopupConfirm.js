import getUserID from "./getUserID";
import addListToPantry from '../supabase_db_operations/addListToPantry';
import emptyGroceryList from "../supabase_db_operations/emptyGroceryList";
// import API_BASE from './Api';

const AddListToPantryPopupConfirm = async() => {
    const userID = await getUserID();
    const wasSuccessful = (await addListToPantry(userID)).success;
    console.log("was successful", wasSuccessful);
    
    if (wasSuccessful) {
        const successfulRun = (await emptyGroceryList(userID)).success;
        return successfulRun;
    }
    else {
        console.log("could not add list to pantry");
        return ("could not add list to pantry");
    }


    // const response = await fetch(`${API_BASE}/add-list-to-pantry`, { method: 'POST' })
    // const data = await response.json()
    // const wasSuccessful = data.success

    // if (wasSuccessful){ 
    //     const secondResponse = await fetch(`${API_BASE}/empty-grocery-list`, { method: 'POST' })
    //     return await secondResponse.json();
    // }
    // else {
    //     console.log("could not add to pantry")
    // }
}

export default AddListToPantryPopupConfirm;