import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import LoadingSpinner from '../Shared/LoadingSpinner';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [admin, adminLoading]= useAdmin(user);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    if(loading || adminLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user || !admin){
        toast.error('Access Denied');
        logOut();

        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children
    
};

export default RequireAdmin;