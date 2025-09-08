import supabaseClient from './SupabaseClient';

const getUserID = async () => {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error) {
        throw error;
    }

    return data?.user?.id ?? null;
};

export default getUserID;