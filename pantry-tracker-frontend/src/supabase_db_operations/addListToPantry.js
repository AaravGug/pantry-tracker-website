import supabaseClient from "../utils/SupabaseClient";

const addListToPantry = async (userID) => {
    try {
        const { data: namesAndQuantities, error: getNamesAndQuantitiesError } = await supabaseClient
            .from('user_ingredients')
            .select('aliased_ingredient_name, p_quantity, gl_quantity, gl_unit_id')
            .eq('user_id', userID)

        if (getNamesAndQuantitiesError) {
            throw getNamesAndQuantitiesError;
        };
        
        const ingredients = namesAndQuantities.map(ingredient => ({
            name:ingredient.aliased_ingredient_name,
            quantity:ingredient.p_quantity + ingredient.gl_quantity,
            unit_id:ingredient.gl_unit_id
        }));
        
        for (const ingredient of ingredients) {

            const { error: addListToPantryError } = await supabaseClient
                .from('user_ingredients')
                .update({
                    'p_quantity': ingredient.quantity,
                    'p_unit_id': ingredient.unit_id})
                .eq('aliased_ingredient_name', ingredient.name)
                .gt('gl_quantity', 0)
                .eq('user_id', userID);

            if (addListToPantryError) {
                throw addListToPantryError;
            };
        };

        return { success: true };
    }
    catch (error) {
        console.error(error);
        return { success: false };
    };
};

export default addListToPantry;