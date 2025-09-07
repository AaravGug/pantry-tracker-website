import { useAuth } from '../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoggedInCheck = () => {
    const { loggedIn, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (!loggedIn) {
                navigate("/login");
            };
        };
    }, [loggedIn, loading, navigate]);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    };

    return null;
};

export default LoggedInCheck;