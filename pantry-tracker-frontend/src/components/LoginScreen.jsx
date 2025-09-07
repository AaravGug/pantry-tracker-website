import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabaseClient from '../utils/SupabaseClient';

const LoginScreen = () => {

    return (
        <div className="popup-window-auth">
            <h2>Log In</h2>
            <Auth supabaseClient={supabaseClient} providers={[]} appearance={{ theme: ThemeSupa }} />
        </div>

    )
}

export default LoginScreen;