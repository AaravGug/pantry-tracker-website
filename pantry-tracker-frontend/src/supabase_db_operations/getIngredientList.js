import supabaseClient from '../utils/SupabaseClient';

const getIngredientList = async (userID) => {
    try {
        const { data: userIngredients, error } = await supabaseClient
            .from('user_ingredients')
            .select(`
                aliased_ingredient_name,
                p_quantity,
                units:p_unit_id(unit_name)
            `)
            .eq('user_id', userID)
            .gt('p_quantity', 0)
            .order('aliased_ingredient_name', { ascending: true});

        if (error) {
            throw (error);
        };

        const ingredients = userIngredients.map(ingredient => ({
            name: ingredient.aliased_ingredient_name,
            quantity: ingredient.p_quantity,
            unitID: ingredient.units.unit_name
        }));
        
        return ingredients;

    }
    catch (error) {
        console.error(error);
        return { 'error': error.message };
    };
};

export default getIngredientList;