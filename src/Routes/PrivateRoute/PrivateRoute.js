import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <Player
                src='https://assets5.lottiefiles.com/packages/lf20_usmfx6bp.json'
                className="player"
                loop
                autoplay
                style={{ height: '600px', width: '600px' }}
            />
        </div>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;