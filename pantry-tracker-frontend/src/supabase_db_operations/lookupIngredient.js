import supabaseClient from '../utils/SupabaseClient';

const lookupIngredient = async (query) => {
    if (!query) {
        return [];
    };

    try {
        const { data, error } = await supabaseClient
            .from('my_pantry')
            .select('aliased_ingredient_name')
            .ilike('aliased_ingredient_name', `%${query}%`)
            .limit(15);

        if (error) {
            throw error;
        };

        const ingredients = data.map(ingredient => ingredient.aliased_ingredient_name);
        return ingredients;
    }
    catch (error) {
        console.error(error);
        return { 'error': error.message };
    };

};

export default lookupIngredient;