import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(process.env.REACT_APP_SUPABASE_API_URL, process.env.REACT_APP_SUPABASE_PUBLIC_KEY);

export default supabaseClient;