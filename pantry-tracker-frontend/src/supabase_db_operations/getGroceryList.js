import supabaseClient from '../utils/SupabaseClient';

const getGroceryList = async (userID) => {
    try {
        const { data: userIngredients, error } = await supabaseClient
            .from('user_ingredients')
            .select(`
                aliased_ingredient_name,
                gl_quantity,
                units:gl_unit_id(unit_name)
            `)
            .eq('user_id', userID)
            .gt('gl_quantity', 0)
            .order('aliased_ingredient_name', { ascending: true});

        if (error) {
            throw (error);
        };

        console.log('ingredients', userIngredients);
        const ingredients = userIngredients.map(ingredient => ({
            name: ingredient.aliased_ingredient_name,
            quantity: ingredient.gl_quantity,
            unitID: ingredient.units.unit_name
        }));
        
        return ingredients;

    }
    catch (error) {
        console.error(error);
        return { 'error': error.message };
    };
};

export default getGroceryList;