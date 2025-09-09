import supabaseClient from "../utils/SupabaseClient";
import getUserID from "../utils/getUserID";
// import API_BASE from '../utils/Api';

const modifyGroceryListEntry = async ({ ingredientName, quantity, units }) => {
    const userID = await getUserID();
    try {
        // check if entry exists in db
        const { data: ingredientExists, error: ingredientExistsError } = await supabaseClient
            .from('user_ingredients')
            .select('aliased_ingredient_name, gl_unit_id')
            .eq('aliased_ingredient_name', ingredientName)
            .eq('user_id', userID);


        if (ingredientExistsError) {
            throw ingredientExistsError;
        };

        const { data: unitsQuery, error: unitsQueryError } = await supabaseClient
            .from('units')
            .select('id')
            .ilike('unit_name', units)
            .single();

        if (unitsQueryError) {
            throw unitsQueryError;
        }

        const unit_id = unitsQuery.id;

        // if entry exists, then we need to update it, reuse unit info from table
        if (ingredientExists.length > 0) {
            const { error: selectedIngredientError } = await supabaseClient
                .from('user_ingredients')
                .update({
                    gl_quantity: quantity,
                    gl_unit_id: unit_id
                })
                .eq('aliased_ingredient_name', ingredientName)
                .eq('user_id', userID);

            if (selectedIngredientError) {
                throw selectedIngredientError;
            };
        }
        // if entry doesn't exist, we need to make it with all relevant info, so get unit_id from units table
        else {
            const { error: selectedIngredientError } = await supabaseClient
                .from('user_ingredients')
                .insert([{
                    user_id: userID,
                    aliased_ingredient_name: ingredientName,
                    gl_quantity: quantity,
                    gl_unit_id: unit_id
                }]);

            if (selectedIngredientError) {
                throw selectedIngredientError;
            };
        }

        return { success: true };

    }
    catch (error) {
        console.error(error);
        return { 'error': error.message };
    }   



    // code for retrieval from flask backend
    // const response = await fetch(`${API_BASE}/modify-grocery-list-entry`, {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ingredientName, quantity, units })});
    // return await response.json();
}

export default modifyGroceryListEntry;