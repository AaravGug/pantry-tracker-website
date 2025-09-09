import supabaseClient from '../utils/SupabaseClient';

const emptyGroceryList = async (userID) => {
    try {
        console.log("running successfully!");
        const { error: emptyGroceryListError } = await supabaseClient
            .from('user_ingredients')
            .update({ 'gl_quantity': 0 })
            .eq('user_id', userID)

        if (emptyGroceryListError) {
            throw emptyGroceryListError;
        }
        console.log("returning true");
        return { success: true };
    }
    catch (error) {
        console.error(error);
        return { 'error': error.message };
    }
};

export default emptyGroceryList;