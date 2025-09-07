import '../styles/login-page.css';
import { useAuth } from '../components/AuthProvider';
import supabaseClient from '../utils/SupabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LogInPage = () => {
    const navigate = useNavigate();
    const { loggedIn } = useAuth();


    const logOutHandler = async () => {
        await supabaseClient.auth.signOut();
    };

    useEffect(() => {
        const { data: { subscription } } = supabaseClient.auth.onAuthStateChange( //get listener for auth state changes, if they just signed in we move them off of the login screen
            (event) => {
                if (event === "SIGNED_IN") {
                    navigate("/");
                };
            }
        );

        return () => subscription.unsubscribe();
    }, [navigate]);
    
    if (loggedIn) {
        return (
            <div className="login-page">
                <h1>You are already logged in.</h1>
                <h2>Would you like to log out?</h2>
                <button onClick={logOutHandler}>Log Out</button>
            </div>
        );
    }
    else if (!loggedIn) {
        return (
        <div className="popup-window-auth">
            <h2>Log In or Sign Up</h2>
            <Auth supabaseClient={supabaseClient} providers={[]} appearance={{ theme: ThemeSupa }} />
        </div>
        );
    };
};

export default LogInPage;